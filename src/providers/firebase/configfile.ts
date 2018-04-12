export class Configfile {
    firebaseConfig = {
        apiKey: "AIzaSyDed2Xq2nYalmk79BaPNNonJltse6s9u-0",
        authDomain: "easydaydata.firebaseapp.com",
        databaseURL: "https://easydaydata.firebaseio.com",
        projectId: "easydaydata",
        storageBucket: "easydaydata.appspot.com",
        messagingSenderId: "887615345187"
    }
    static firebaseConfig(): any {
        return this.firebaseConfig;
    }
}