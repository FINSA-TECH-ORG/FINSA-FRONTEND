

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
    tag: "Exam Preparation",
    title: `Exam Preparation: 2024/2026 Session`,
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
    badge_type: "high"
},
  
];