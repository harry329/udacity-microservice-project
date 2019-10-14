// export const config = {
//   "dev": {
//     "username": process.env.POSTGRESS_USERNAME,
//     "password": process.env.POSTGRESS_PASSWORD,
//     "database": process.env.POSTGRESS_DB,
//     "host": process.env.POSTGRESS_HOST,
//     "dialect": "postgres",
//     "aws_reigion": process.env.AWS_REGION,
//     "aws_profile": process.env.AWS_PROFILE,
//     "aws_media_bucket": process.env.AWS_BUCKET
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   },
//   "jwt": {
//     "secret": process.env.JWT_SECRET
//   }
//
// }

export const config = {
    "dev": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_DATABASE_HOST_URL,
        "dialect":  process.env.DIALECT,
        "aws_reigion":  process.env.AWS_REGION,
        "aws_profile": process.env.AWS_PROFILE,
        "aws_media_bucket": process.env.BUCKET
    },
    "prod": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_DATABASE_HOST_URL,
        "dialect":  process.env.DIALECT,
        "aws_reigion":  process.env.AWS_REGION,
        "aws_profile": process.env.AWS_PROFILE,
        "aws_media_bucket": process.env.BUCKET
    },
    "jwt": {
        "secret": process.env.JWT_SECRET ,
    }

}
