const refs = {
    days : document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins : document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),

}

class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = Date.parse(targetDate) ;
        this.start()
    }
    start(){
       setInterval(() => {
        const currentDate = Date.now()
        const time = this.targetDate - currentDate;
        this.onParseDate(time);
       }, 1000)
        
    }

    
    onParseDate(time){
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.onRenderDate(days,hours,mins,secs)
    }

    onRenderDate(days,hours,mins,secs){
        
            refs.days.innerHTML = days;
            refs.hours.innerHTML = hours;
            refs.mins.innerHTML = mins;
            refs.secs.innerHTML = secs;
    
            
    }
} 


const start = new CountdownTimer('#timer-1','Jul 17, 2023');
