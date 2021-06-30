import table from './asyncTable'
import person from './asyncPerson'
export default [...table, ...person, { path: '*', redirect: '/404' }]