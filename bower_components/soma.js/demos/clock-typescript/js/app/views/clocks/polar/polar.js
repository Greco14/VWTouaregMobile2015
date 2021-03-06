///<reference path='../../../vo/time.ts'/>
///<reference path='../../../interfaces/IClockView.ts'/>
var clock;
(function (clock) {
    var PolarView = (function () {
        function PolarView(target) {
            this.element = null;
            this.width = 0;
            this.height = 0;
            this.canvas = null;
            this.context = null;
            this.element = target;

            this.width = 300;
            this.height = 300;
            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');

            this.canvas.width = this.width;
            this.canvas.height = this.height;

            this.element.appendChild(this.canvas);
        }
        PolarView.prototype.update = function (time) {
            this.context.save();
            this.context.clearRect(0, 0, this.width, this.height);
            this.context.translate(this.width * 0.5, this.width * 0.5);
            this.context.rotate(-Math.PI / 2);
            this.context.lineWidth = 18;
            var milliSec = time.milliseconds;
            var sec = milliSec / 1000 + time.seconds;
            var min = sec / 60 + time.minutes;
            var hr = min / 60 + time.hours;
            var dow = time.day;
            var day = time.date;
            var month = time.month;
            var secPer = sec / 60;
            var minPer = min / 60;
            var hrPer = hr / 24;
            var dowPer = dow / 7;
            var monthPer = month / 12;
            var dayPer = 0;
            if (month === 2) {
                dayPer = day / 29;
            } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                dayPer = day / 31;
            } else {
                dayPer = day / 30;
            }
            this.writeTime(this.context, 40, monthPer);
            this.writeTime(this.context, 60, dayPer);
            this.writeTime(this.context, 80, dowPer);
            this.writeTime(this.context, 100, hrPer);
            this.writeTime(this.context, 120, minPer);
            this.writeTime(this.context, 140, secPer);
            this.context.restore();
        };

        PolarView.prototype.writeTime = function (context, radius, per) {
            context.save();
            context.strokeStyle = this.calculateColor(per);
            context.beginPath();
            context.arc(0, 0, radius, 0, per * (Math.PI * 2), false);
            context.stroke();
            context.restore();
        };

        PolarView.prototype.calculateColor = function (per) {
            var brightness = 255;
            var red = 0, blue = per * brightness, green = brightness - blue;
            return 'rgba(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ',1)';
        };

        PolarView.prototype.dispose = function () {
            this.element.removeChild(this.element.firstChild);
        };
        return PolarView;
    })();
    clock.PolarView = PolarView;
})(clock || (clock = {}));
