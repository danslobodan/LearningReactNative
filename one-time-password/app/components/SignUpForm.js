import { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import axios from 'axios';

const baseUrl = ' https://226f-178-149-13-162.ngrok-free.app';
const firebaseProject = 'one-time-password-9cc2e';
const serverLocation = 'us-central1';

const SignUpForm = () => {
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post(
                `${baseUrl}/${firebaseProject}/${serverLocation}/createUser`,
                { phone }
            );
        } catch (error) {
            console.log(error);
        }

        try {
            await axios.post(
                `${baseUrl}/${firebaseProject}/${serverLocation}/requestOneTimePassword`,
                { phone }
            );
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
                <Text>Enter Phone Number</Text>
                <Input
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                />
            </View>
            <Button onPress={handleSubmit} title='Submit' />
        </View>
    );
};

export default SignUpForm;
