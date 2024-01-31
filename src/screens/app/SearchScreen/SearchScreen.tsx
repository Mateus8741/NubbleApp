import { Icon, Screen, TextInput } from '@components'
import React from 'react'
import { Text } from 'react-native'

export function SearchScreen() {
    const [search, setSearch] = React.useState('')

    return (
        <Screen 
            canGoBack 
            HeaderComponent={
                <TextInput value={search} 
                onChangeText={setSearch} 
                LeftComponent={<Icon name='search' color='gray3' />} 
            />}
        >
            <Text>SearchScreen</Text>
        </Screen>
    )
}