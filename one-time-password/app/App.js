import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

import { initializeApp } from 'firebase/app';

export default function App() {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: 'AIzaSyDxmCt9fb21nWqKieqfLzMGtPTTPzfi4iQ',
            authDomain: 'one-time-password-9cc2e.firebaseapp.com',
            databaseURL:
                'https://one-time-password-9cc2e-default-rtdb.europe-west1.firebasedatabase.app',
            projectId: 'one-time-password-9cc2e',
            storageBucket: 'one-time-password-9cc2e.appspot.com',
            messagingSenderId: '107356400415',
            appId: '1:107356400415:web:78ab03ea60233f9d4a9e2a',
            measurementId: 'G-KCG5NRZVF4',
        };

        initializeApp(firebaseConfig);
    }, []);

    return (
        <View style={styles.container}>
            <SignUpForm />
            <SignInForm />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
