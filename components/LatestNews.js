import React, { useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view';
import NewsScreen from '../Screens/NewsScreen';
import BookmarkScreen from '../Screens/BookmarkScreen';

const LatestNews = () => {
    let layout = useWindowDimensions();
    const [index, setIndex] = useState(0)


    const [routes] = useState([
        {key:'first',title:'News'},
        {key:'second',title:'Bookmarks'}
    ]);

    const renderScene = SceneMap({
        first: NewsScreen,
        second: BookmarkScreen,
    })

    return (
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    )
}

export default LatestNews
