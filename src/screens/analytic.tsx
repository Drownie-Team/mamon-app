import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { useTheme } from '../context/theme_context';

// Themed Components
import ThemedText from '../components/themed/themed_text';

// const renderCustomLegend = () => {
//   return (
//     <View style={{display: 'flex', flexDirection: 'row', gap: 10, maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
//       {
//         pieData.map((pieItem, i) => (
//           <View key={i} style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8}}>
//             <View style={{backgroundColor: pieItem.color, width: 14, height: 14, borderRadius: 3}}></View>
//             <ThemedText>{pieItem.text}</ThemedText>
//           </View>
//         ))
//       }
//     </View>
//   );
// };

function AnalyticScreen(): React.JSX.Element {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('RENDER STATIC SCREEN');
  }, []);

  return (
    <SafeAreaView style={StyleSheet.flatten([ styles.container, { backgroundColor: theme.secondary_background } ])}>
      <View style={{width: '100%', padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', rowGap: 10}}>
        {/* <ThemedText style={{fontWeight: 'bold', color: theme.text, fontSize: 18, width: '100%'}}>Monthly Spending</ThemedText>
        <View style={{backgroundColor: theme.background, width: '100%', padding: 25, display: 'flex', alignItems: 'center', borderRadius: 12, elevation: 3, gap: 15}}>

          <LineChart
            data={lineData}
            data2={lineData2}
            curved
            showVerticalLines
            showXAxisIndices
            showYAxisIndices
          />
        </View>

        <ThemedText style={{fontWeight: 'bold', color: theme.text, fontSize: 18, width: '100%'}}>Top Spending Categories</ThemedText>
        <View style={{backgroundColor: theme.background, width: '100%', padding: 25, display: 'flex', alignItems: 'center', borderRadius: 12, elevation: 3, gap: 15}}>
          <PieChart
            donut
            // isThreeD
            // showText
            strokeColor="black"
            strokeWidth={2}
            innerCircleBorderColor="black"
            innerCircleBorderWidth={2}
            data={pieData}
          />
          {renderCustomLegend()}
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative', backgroundColor: '#f3f3f3' },
});

export default AnalyticScreen;
