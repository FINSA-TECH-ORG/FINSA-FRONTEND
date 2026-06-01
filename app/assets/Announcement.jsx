

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
    tag: "Countdown",
    title: `${ day > 0 ? day :  "D-Day of FINSA's symposium"} Days, ${hours} Hours to The Finance Symposium`,
    time: "Just now",
    summary: "The final countdown begins as preparation shifts to the final execution phase.",
    details: "With two weeks remaining, the Executive Council is finalizing logistics for over 1,000 expected attendees. Please ensure all registration profiles are updated in the app event portal to guarantee expedited entry. Security and accreditation protocols will be enforced at the Main Auditorium entrance.",
    priority: "high"
},
  
];