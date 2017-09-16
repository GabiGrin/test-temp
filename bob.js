
const s = require('shelljs');
console.log('RUNNING')
console.log(22, process.env.GIT_PARAMS);

const files = s.exec('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD').stdout.split('\n');

console.log(files);