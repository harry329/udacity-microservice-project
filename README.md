# cloud-developer
content for Udacity's cloud developer nanodegree

## To run k8s cluster
creating following files in deployment dir to run k8 cluster
1) create aws-secret.yaml file, in which write your aws credentials in base64 encoded.
2) create env-configmap.yaml file, in which  provide following valuse 
    POSTGRESS_DATABASE                                               
    POSTGRESS_DATABASE_HOST_URL
    DIALECT
    AWS_REGION
    AWS_PROFILE
    BUCKET
3) create env-secret.yaml file , in which provide following values in base64 encoded format -
    POSTGRESS_USERNAME
    POSTGRESS_PASSWORD
    JWT_SECRET
