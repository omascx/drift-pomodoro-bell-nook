const PROJECT = "drift-pomodoro-bell-nook";
const PROFILE = "0007";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
