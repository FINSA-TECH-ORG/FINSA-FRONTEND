

const getToday = new Date();


const symposiumDateInIso = `2026-06-09T23:59:59`
const symposiumDate = new Date(symposiumDateInIso);

const countdown = symposiumDate - getToday;
//console.log(countdown);
const day = Math.floor(countdown / (1000 * 60 * 60 * 24));
const hours = Math.floor((countdown/ (1000 * 60 * 60 )) % 24)
//console.log(countdown);
// const symposiumDate = getToday + 11;


//console.log(getToday?.slice(0 ,10));
export const announcements = [
  {
    id: 1,
    tag: "Insustry Talk 4.0",
    title: `Industry Talk 4.0: What’s Next?`,
    time_stamp: "22-06-2026:00:00:00",
    summary: "The 25/26 executives are excited to announce the upcoming Industry Talk 4.0, a three-day event designed to help you explore your career options, entrepreneurship opportunities, and internship prospects.",
    full_message:`
Something exciting is coming 👀🎙️
Industry Talk 4.0 is almost here, and this one is all about helping you figure out what’s next, whether that’s building your career, exploring entrepreneurship, or landing the right internship.

Save the dates: 25th–27th September 2026.

More details soon. You definitely want to keep an eye out for this one. 💙`,
    badge_type: "high"
},
  {
    id: 2,
    tag: "Exam Preparation",
    title: `Exam Preparation: 2025/2026 Session`,
    time_stamp: "22-06-2026:00:00:00",
    summary: "Amarachi Confidence General Secretary 25/26",
    full_message:`

A few reminders as you go into this period:
* Get proper rest before each paper; a tired mind forgets what it knows.
* ⁠Go early for your exams at least 30 minutes before the allotted time. 
* ⁠Read every question carefully before you start writing.
* ⁠Manage your time across questions; don’t let one question eat into the marks of another.
* ⁠Stay hydrated and eat properly, even when it feels like there’s no time.

On behalf of the 25/26 executives, we’re rooting for every single one of you. Reach out to your class reps or the executives if you need anything during this period — notes, past questions, or just someone to talk to.

You’ve got this. Go show up as the best version of your prepared self.`,
    badge_type: "low"
},

 


  
];