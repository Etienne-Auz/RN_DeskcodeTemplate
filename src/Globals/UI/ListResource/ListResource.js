import React, {useContext, useEffect, useState} from 'react';

import { 
TextInput,
StyleSheet,
Text,
FlatList,
ActivityIndicator,
RefreshControl
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';

import { FetchAPI } from '../../Utils/RequestAPI';



const ListResource = ({children, targetResource}) => {

    const { theme } = useContext(ThemeContext);
    const [loading, isLoading] = useState(false);
    const [data, setData] = useState([]);

    const RetrieveDataFromServer = async () => {
      try {
        isLoading(true);
        const {data} = await FetchAPI("GET", {
          url: targetResource,
        });
        setData(data);
        isLoading(false);
      }
      catch(e) {

      }
    }

    useEffect(() => {
      RetrieveDataFromServer();
    }, []);

    const ItemView = ({ item }) => {
      return (
        <Text
          style={{
            fontSize: 20,
            padding: 10,
          }}>
          {item.first_name}: {item.mail}
        </Text>
      );
    };

    return (
        <>
        {loading ? <ActivityIndicator /> : null}
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      enableEmptySections={true}
      renderItem={ItemView}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={isLoading} />
      }
    />
        </>
    )

};


export default ListResource;