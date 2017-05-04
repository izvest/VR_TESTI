import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class VR_TESTI extends React.Component {
  constructor(props){
	super(props);
	this.state = {
        	foliData: [],
		favouriteColor: '#244852af',
        }
	this.doSomething=this.doSomething.bind(this);
	this.fetchData=this.fetchData.bind(this);
  }

  doSomething(){
	console.log("Tamahan toimii!");
	const toastView = [];
	toastView.push(
	   <Text style={{backgroundColor: '#1a2c9eaf',transform: [{translate: [-2, 0, -3]}],}}>
		Jotain tehty
	   </Text>
	)
	return toastView;
  }

  fetchData(){
	fetch("https://data.foli.fi/siri/sm/1708/format")
	.then((res) => {return res.json();})
	.then((res) => {this.setState((prevState) => ({foliData: (res.result)}));
	}).catch((error) => {console.log("FetchDataError: " + error.message);})
  }


  render() {
    return (
      <View>
        <Pano source={asset('mountain.jpg')}/>
        <Text
          style={{
            backgroundColor: '#1a2c9eaf',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.1,
            paddingRight: 0.1,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
          {this.state.foliData.length > 0 ? this.state.foliData[0].lineref + " " + this.state.foliData[0].destinationdisplay + " " + this.state.foliData[0].expecteddeparturetime: "no data"}
        </Text>
	<VrButton
  		style={{
		width:1.5,
		backgroundColor: '#f4ad42af',
		}}
	  	onClick={()=>this.fetchData()}
		>
	 <Text
          style={{
            backgroundColor: '#f4ad42af',
            fontSize: 0.3,
            fontWeight: '500',
            layoutOrigin: [0.5, 0],
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
	  Button
        </Text>
	</VrButton>
	{/*{this.doSomething()}*/}
      </View>
    );
  }
};

AppRegistry.registerComponent('VR_TESTI', () => VR_TESTI);
