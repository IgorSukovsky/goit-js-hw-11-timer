class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      daysElem: document.querySelector(
        `${this.selector} span[data-value="days"]`
      ),
      hoursElem: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      minsElem: document.querySelector(
        `${this.selector} span[data-value="mins"]`
      ),
      secsElem: document.querySelector(
        `${this.selector} span[data-value="secs"]`
      ),
    };

    this.run();
  }
  changeDate() {
    const time = this.targetDate.getTime() - new Date().getTime();
    time > 0 ? this.calculateTime(time) : this.viewError();
  }
  calculateTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.changeElems(days, hours, mins, secs);
  }
  changeElems(days, hours, mins, secs) {
    this.refs.daysElem.innerHTML = days;
    this.refs.hoursElem.innerHTML = hours;
    this.refs.minsElem.innerHTML = mins;
    this.refs.secsElem.innerHTML = secs;
  }
  run() {
    this.changeDate();
    setInterval(() => {
      this.changeDate();
    }, 1000);
  }
  viewError() {
    document.querySelector(this.selector).innerHTML = "sorry!";
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("may.18.2021"),
});
