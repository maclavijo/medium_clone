import ormconfig from '@app/ormconfig'
const ormseedconfig = {
    ...ormconfig,
    // migrations: [__dirname + 'src/seeds/*.ts'],
    migrations: [ __dirname + '/seeds/*.ts'],
};
export default ormseedconfig;