/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;
// // const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// module.exports = {
//     images: {
//         unoptimized: true,
//       },
// }

// // module.exports = (phase) => {

// //     if (phase === PHASE_DEVELOPMENT_SERVER) {
// //         return {
// //             env: {
// //                 mongodb_username: 'maximilian',
// //                 mongodb_password: '2YkcXq43KyPk0vqp',
// //                 mongodb_clustername: 'cluster0',
// //                 mongodb_database: 'my-site'
// //             }
// //         };
// //     }
    
// //         return {
// //             env: {
// //                 mongodb_username: 'maximilian',
// //                 mongodb_password: '2YkcXq43KyPk0vqp',
// //                 mongodb_clustername: 'cluster0',
// //                 mongodb_database: 'my-site'
// //             }
// //         }
    

    
// // }