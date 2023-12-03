pipeline {
  agent any
  stages {
    stage('Pre-Build') {
      steps {
        echo 'Espacio de trabajo'
      }
    }

    stage('Build') {
      steps {
        echo 'Compilacion'
      }
    }

    stage('IC') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        echo 'Pruebas'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }

  }
}