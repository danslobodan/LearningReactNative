import { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import axios from 'axios';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

const baseUrl = ' https://226f-178-149-13-162.ngrok-free.app';
const firebaseProject = 'one-time-password-9cc2e';
const serverLocation = 'us-central1';

const SignInForm = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async () => {
        try {
            const { data: token } = await axios.post(
                `${baseUrl}/${firebaseProject}/${serverLocation}/verifyOneTimePassword`,
                { phone, code }
            );

            const auth = getAuth();
            const { user } = await signInWithCustomToken(auth, token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View
            style={{
                width: '100%',
                padding: 10,
            }}
        >
            <View style={{ marginBottom: 10, width: '100%' }}>
                <Text>Enter Phone</Text>
                <Input
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                />
            </View>
            <View style={{ marginBottom: 10, width: '100%' }}>
                <Text>Enter Code</Text>
                <Input value={code} onChangeText={(value) => setCode(value)} />
            </View>
            <Button onPress={handleSubmit} title='Submit' />
        </View>
    );
};

export default SignInForm;
