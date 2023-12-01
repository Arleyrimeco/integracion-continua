pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                sh "docker build -f INTEGRACION-CONTINUA/Dockerfile -t arleyrimeco/ integracion-continua:1.0.0-${BUILD_ID} integracion-continua"
            }
            
        }
        stage('docker push') {
            steps {
                sh "docker push carleyrimeco/ integracion-continua:1.0.0-${BUILD_ID}"
            }
            
        }
    }
}
