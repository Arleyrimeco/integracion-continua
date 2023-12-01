pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                sh "docker build -f integracion-continua/Dockerfile -t arleyrimeco/integracion-continua:1.0.0-${BUILD_ID} integracion-continua"
            }
            
        }
        stage('docker push') {
            steps {
                sh "docker push arleyrimeco/integracion-continua:1.0.0-${BUILD_ID}"
            }
            
        }
    }
}
