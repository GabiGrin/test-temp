
const s = require('shelljs');
console.log('RUNNING')
const params =  process.env.GIT_PARAMS.split(' ');

const ohead = params[0];
const nhead = params[1];

if (ohead && nhead) {
    console.log({ohead, nhead});
    const files = s.exec(`git diff-tree -r --name-only --no-commit-id ${ohead} ${nhead}`).stdout.split('\n');
} else {
    console.log('no ohead head');
}
