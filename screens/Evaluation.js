import React, { useState } from 'react';
import HeaderContainer from '../components/header';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Picker } from 'native-base';
import { StyleSheet, View, TextInput,ScrollView, Image, Alert} from 'react-native';
import Scroll from "../components/Scroll";
import * as yup from 'yup'
import { Formik } from 'formik'
import { Fragment } from 'react';

function  Evaluation({navigation}){
        
        // all variables
        const [ contact_pers , setContact_pers] = useState('oui') ;
        const [ full_contact , setFull_contact] = useState() ;
        const [ contact_time , setContact_time] = useState() ;
        const [ protect_contact_pers , setProtect_contact_pers] = useState() ;
        const [ face_contact , setFace_contact] = useState() ;
        const [ hyg_rule_av_pers , setHyg_rule_av_pers] = useState() ;
        const [ liquid_contact , setLiquid_contact] = useState() ;
        const [ escretion, setEscretion] = useState() ;
        const [ protect_contact_es , setProtect_contact_es] = useState() ;
        const [ contact_part , setContact_part] = useState() ;
        const [ hyg_rule_av_liq , setHyg_rule_av_liq] = useState() ;
        const [ resp_symp , setResp_symp] = useState() ;
        const [ start_symp , setStart_symp] = useState() ;
        const [ fiervre , setFiervre] = useState() ;
        const [ mal_gorge , setMal_gorge] = useState() ;
        const [ toux , setToux] = useState() ;
        const [ ecoul_nasal , setEcoul_nasal] = useState() ;
        const [ essoufement , setEssoufement] = useState() ;
        const [ frisson , setFrisson] = useState() ;
        const [ mal_tete , setMal_tete] = useState() ;
        const [ appetit, setAppetit] = useState() ;
        const [ anosmie , setAnosmie] = useState() ;
        const [ diarrhee , setDiarrhee] = useState() ;
        const [ nausees, setNausees] = useState() ;
        const [ alt_cons, setAlt_cons] = useState() ;
        const [ doul_musc , setDoul_musc] = useState() ;
        const [ ante_cli, setAnte_cli] = useState() ;
        const [ enceinte , setEnceinte] = useState() ;

        //disable
            const [ disable , setDisable] = useState(false) ;
        // {/**,{/* text = "oui" ? setDisable(false) : setDisable(true)*/} 


  return (
    <Container> 
      <HeaderContainer navigation={navigation} />
        <Content>
        <Formik
            initialValues={{ age: '', Taille: '',poids:'' }}
            onSubmit={async (values) => {
              await sleep(500);
              await axios.post('http://104.214.98.155:5000/tekuv/auth', {
                email: values.age,
                password:password,
              }).then((resp)=>{

                /*Alert.alert('Titre','message',[
                    {'text':'ok'},

                ]) */
                console.log(resp);



              }).catch((error)=>{
                  console.log(error);
              })
              
            }}
            validationSchema={yup.object().shape({
              age: yup
                .string()
                .required("Votre age est obligatoire"),
              Taille: yup
                .string()
                .required("Votre Taille  est obligation"),
              poids: yup
                .string()
                .required('le poids est obligatoire')
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
              <Fragment>
                {/**<Scroll/>*/}
                <View style={styles.container}>
                    <Button style={styles.btn}>
                      <Text style={styles.Textbtn} >         Test d'auto-évaluation</Text>
                    </Button> 
                </View>

                <View style={styles.statistique}>

                    <View style={styles.sectionFrom}  > 
                        <Text style={styles.label}>Entrer Votre Age</Text>
                        <View style={styles.contentInput} >
                            <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 15, }}
                                placeholder=' Ex: 22 ans  '
                                keyboardType='numeric'
                                
                      value={values.age}
                      onChangeText={handleChange('age')}
                      onBlur={() => setFieldTouched('age')}
                                
                            />
                        </View>
                        {touched.age && errors.age &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.age}</Text>
                  }
                    </View>

                    <View style={styles.sectionFrom}  >
                        <Text style={styles.label}>Entrer Votre poids (kg)</Text> 
                        <View style={styles.contentInput}>
                            <TextInput  style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '70%', padding: 10, fontSize: 15, }}
                                placeholder=' Ex: 80kg'
                                keyboardType='numeric'
                                value={values.poids}
                                onChangeText={handleChange('poids')}
                                onBlur={() => setFieldTouched('poids')}
                                          
                                      />
                                  </View>
                                  {touched.poids && errors.poids &&
                              <Text style={{ fontSize: 10, color: 'red' }}>{errors.poids}</Text>
                            }
                    </View>

                    <View style={styles.sectionFrom}  >
                        <Text style={styles.label}>Entrer Votre Taille en (m) </Text>
                        <View style={styles.contentInput} >
                            <TextInput  style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '70%', padding: 10, fontSize: 15, }}
                                placeholder=' Ex: 180  '
                                keyboardType='numeric'
                                value={values.Taille}
                                onChangeText={handleChange('Taille')}
                                onBlur={() => setFieldTouched('Taille')}
                                          
                                      />
                                  </View>
                                  {touched.Taille && errors.Taille &&
                              <Text style={{ fontSize: 10, color: 'red' }}>{errors.Taille}</Text>
                            }
                    </View>

                    <Text style={styles.label}>Avez vous été en contact avec un patient de Covid ou une personne suspecte ?</Text>
                    <View style={styles.inputcontenair} >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setContact_pers(text)}
                                selectedValue={contact_pers}
                            >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.sidebarDivider}></View>
                </View>
                <View>
                    {
                        contact_pers == "Non" ? (null) : (
                            <View style={styles.statistique } >
                            <Text style={styles.label}>Avez vous été en contact proche( moins d'un 1.5m) avec un patient de Covid ou une personne suspecte ?</Text>
                            <View style={styles.inputcontenair}  >
                                <View style={{ flexDirection: 'row' }}>
                                    <Picker
                                        mode='dropdown'
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                        onValueChange={ (text) => setFull_contact(text) }
                                        selectedValue={full_contact}
                                    > 
                                        <Picker.Item label="Oui" value="Oui" /> 
                                        <Picker.Item label="Non" value="Non" /> 
                                    </Picker>
                                </View>
                            </View>
                         
                                <Text style={styles.label}>Période de contact</Text>
                                <View style={styles.inputcontenair}  >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setContact_time(text)}
                                            selectedValue={contact_time}
                                        >
                                            <Picker.Item label="< 5 minutes" value=" < 5 minutes" />
                                            <Picker.Item label="  5 à 15 minutes" value="5 à 15 minutes " />
                                            <Picker.Item label="> 15 minutes" value="15 minutes" />
                                        </Picker>
                                    </View>
                                </View>
        
                                <Text style={styles.label}>Contact Protégé ?</Text>
                                <View style={styles.inputcontenair}  >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setProtect_contact_pers(text)}
                                            selectedValue={protect_contact_pers}
                                        >
                                            <Picker.Item label="Oui" value="Oui" />
                                            <Picker.Item label="Non" value="Non" />
                                        </Picker>
                                    </View>
                                </View>
        
                                <Text style={styles.label}>Contact de façe ?</Text>
                                <View style={styles.inputcontenair} > 
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setFace_contact(text)}
                                            selectedValue={face_contact}
                                        >
                                            <Picker.Item label="Oui" value="Oui" />
                                            <Picker.Item label="Non" value="Non" />
                                            <Picker.Item label="Je ne sais pas" value="je ne sais pas " />
                                        </Picker>
                                    </View>
                                </View>
        
                                <Text style={styles.label}>Avez-vous suivi les mesures d’hygiène des mains avant votre contact avec le patient ?</Text>
                                <View style={styles.inputcontenair}  >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setHyg_rule_av_pers(text)}
                                            selectedValue={hyg_rule_av_pers}
                                        >
                                            <Picker.Item label="Toujours Conformément au recommendation " value="toujours Conformément au recommendation" />
                                            <Picker.Item label="La plus part du temps" value="la plus part du temps" />
                                            <Picker.Item label="De temps en temps" value="De temps en temps" />
                                            <Picker.Item label="Rarement" value="Rarement" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.sidebarDivider}></View>
                            </View>
                        ) 
                  
                    }
                </View>
                
                

                <View style={styles.statistique}>
                    <Text style={styles.label}>Etes-vous entré en contact avec des excrétions ou liquides biologiques d'un patient ou d'une personne suspecte ? </Text>
                    <View style={styles.inputcontenair} >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setLiquid_contact(text)}
                                selectedValue={liquid_contact}
                           >
                                <Picker.Item label="oui " value="oui" />
                                <Picker.Item label="non" value="non" />
                                <Picker.Item label="Je ne sais pas" value="je ne sais pas" />
                            </Picker>
                        </View>
                    </View>
                    <View>
                    {
                        liquid_contact == "non" ? (null) : (
                            <View>
                                <Text style={styles.label}> Nature de l'excrétions </Text>
                                <View style={styles.inputcontenair} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setEscretion(text)}
                                            selectedValue={escretion}

                                        >
                                            <Picker.Item label="Crachat " value="Crachat" />
                                            <Picker.Item label="non" value="non" />
                                            <Picker.Item label="Je ne sais pas" value="je ne sais pas " />
                                        </Picker>
                                    </View>
                                </View>

                                <Text style={styles.label}> Contact protégé </Text>
                                <View style={styles.inputcontenair} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setProtect_contact_es(text)}
                                            selectedValue={protect_contact_es}
                                    >
                                            <Picker.Item label="oui " value="oui" />
                                            <Picker.Item label="non" value="non" />
                                            <Picker.Item label="Je ne sais pas" value="Je ne sais pas " />
                                        </Picker>
                                    </View>
                                </View>

                                    <Text style={styles.label}>La partie de votre corps en contact</Text>
                                    <View style={styles.inputcontenair} >
                                        <View style={{ flexDirection: 'row' }}>
                                            <Picker
                                                mode='dropdown'
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                                onValueChange={ (text) => setContact_part(text)}
                                                selectedValue={contact_part}
                                                >
                                                <Picker.Item label="oui " value="oui" />
                                                <Picker.Item label="non" value="non" />
                                                <Picker.Item label="Je ne sais pas" value="Je ne sais pas " />
                                            </Picker>
                                        </View>
                                    </View>
            {/**rrrrrrrrrrrr */}
                                    <Text style={styles.label}>Avez-vous suivi les mesures d'hygiène des mains avant-votre contact avec les excretion du patient ? </Text>
                                    <View style={styles.inputcontenair} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Picker
                                            mode='dropdown'
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                            onValueChange={ (text) => setHyg_rule_av_liq(text)}
                                            selectedValue={hyg_rule_av_liq}
                                        >
                                            <Picker.Item label="oui " value="oui" />
                                            <Picker.Item label="non" value="non" />
                                            <Picker.Item label="Je ne sais pas" value="Je ne sais pas " />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        ) 
                  
                    }
                </View>
                    <View style={styles.sidebarDivider}></View>
                </View>
                
                <View style={styles.statistique}>
                    <Text style={styles.label}>Avez-vous eu des symptômes respiratoires, quels qu’ils soient (mal de gorge, toux, écoulement nasal, essoufflement) au cours de la période suivant l’admission du patient ?</Text>
                    <View style={styles.inputcontenair}  >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setResp_symp(text)}
                                selectedValue={resp_symp}
                            >
                                <Picker.Item label="oui " value="oui" />
                                <Picker.Item label="non" value="non" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.sectionFrom}  >
                        <Text style={styles.label}>Date d'apparition du premier symptômes</Text>
                        <View style={styles.contentInput}>
                            <TextInput style={{ marginLeft: 5, marginRight: 20, marginTop: 5,  height: 40, width: '60%', padding: 10, fontSize: 15, }}
                                placeholder=' Ex: 22/10/98'
                                keyboardType='numeric'
                                onChangeText={ (text) => setStart_symp(text)}
                                />
                        </View>
                    </View>

                    <Text style={styles.label}>Fièvre (≥38 °C) ou antécédents de fièvre (sélectionner la température max)</Text>
                    <View style={styles.inputcontenair}  >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setFiervre(text)}
                                selectedValue={fiervre}

                            >
                                <Picker.Item label="< 36.1 " value="< 36.1" />
                                <Picker.Item label="36.1 - 37.8" value="36.1 - 37.8" />
                                <Picker.Item label=" > 37.8" value="37.8" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.sidebarDivider}></View>
                </View>

                <View style={styles.statistique}>

                    <Text style={styles.label}>Avez vous un mal de Gorge ?</Text>
                    <View style={styles.inputcontenair} >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setMal_gorge(text)}
                                selectedValue={mal_gorge}
                            >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                                <Picker.Item label="Je ne sais pas" value="Je ne sais pas" />
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.label}>Avez-vous de la toux ou un début de toux ? </Text>
                    <View style={styles.inputcontenair}  >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setToux(text)}
                                selectedValue={toux}
                            >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                                <Picker.Item label="Je ne sais pas" value="Je ne sais pas" />
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.label}>Avez-vous un écoulement nasal ?</Text>
                    <View style={styles.inputcontenair}  >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setEcoul_nasal(text)}
                                selectedValue={ecoul_nasal}

                            >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.label}>Etes vous essouflés a un moindre effort ?</Text>
                    <View style={styles.inputcontenair}  >
                        <View style={{ flexDirection: 'row' }}>

                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setEssoufement(text)}
                                selectedValue={essoufement}
                           >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.sidebarDivider}></View>
                </View>

                <View style={styles.statistique}>
                <Text style={styles.label}>Avez-vous des frissons ?</Text>
                <View style={styles.inputcontenair}>
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setFrisson(text)}
                            selectedValue={frisson}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous des maux de tête ?</Text>
                <View style={styles.inputcontenair}  >
                    <View style={{ flexDirection: 'row' }}>
                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setMal_tete(text)}
                            selectedValue={mal_tete}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous une perte d'appetit ?</Text>
                <View style={styles.inputcontenair} >
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setAppetit(text)}
                            selectedValue={appetit}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Perte de l’odorat (anosmie) ou du goût</Text>
                <View style={styles.inputcontenair}  >
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setAnosmie(text)}
                            selectedValue={anosmie}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous une Diarrhée ?</Text>
                <View style={styles.inputcontenair} >
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setDiarrhee(text)}
                            selectedValue={diarrhee}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous des nausées ?</Text>
                <View style={styles.inputcontenair} >
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setNausees(text)}
                            selectedValue={nausees}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous une altération de la conscience ?</Text>
                <View style={styles.inputcontenair}>
                    <View style={{ flexDirection: 'row' }}>

                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setAlt_cons(text)}
                            selectedValue={alt_cons}
                        >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Avez-vous des douleurs musculaires / courbatures ?</Text>
                <View style={styles.inputcontenair}  >
                    <View style={{ flexDirection: 'row' }}>
   
                        <Picker
                            mode='dropdown'
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                            onValueChange={ (text) => setDoul_musc(text)}
                            selectedValue={doul_musc}
                       >
                            <Picker.Item label="Oui" value="Oui" />
                            <Picker.Item label="Non" value="Non" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.sidebarDivider}></View>
                </View>

    
                <View style={styles.statistique}>
                    <Text style={styles.label}>Avez-vous des antécédents clinique ?</Text>
                    <View style={styles.inputcontenair} >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setAnte_cli(text)}
                                selectedValue={ante_cli}
                            >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                            </Picker>
                        </View>
                    </View>

                    <Text style={styles.label}>Etes vous enceinte ?</Text>
                    <View style={styles.inputcontenair} >
                        <View style={{ flexDirection: 'row' }}>
                            <Picker
                                mode='dropdown'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ height: 50, width: '85%', marginLeft: 10, fontSize: 40 }}
                                onValueChange={ (text) => setEnceinte(text)}
                                selectedValue={enceinte}
                           >
                                <Picker.Item label="Oui" value="Oui" />
                                <Picker.Item label="Non" value="Non" />
                            </Picker>
                        </View>
                    </View>
                <View style={styles.sidebarDivider}></View>
                </View>

                <View style={styles.container}>
                    <Button style={styles.btn}>
                      <Text style={styles.Textbtn} >Lancer le traitement</Text>
                    </Button> 
                </View>
                </Fragment>
            )}
          </Formik>
        </Content>
        
    </Container>
  );
}

const styles = StyleSheet.create({
    stretch: {
      alignContent: 'center',
      alignSelf:"center",
      alignItems: 'center',
      borderBottomWidth:2,
      borderColor:'pink',
      width: 300,
      height: 200,
      resizeMode: 'stretch',
      shadowColor:"black",
      borderRadius:5,
    },

    hidenn:{
        display:"none",
    },

   inputcontenair:{ marginHorizontal: 2, marginBottom: 30, flexDirection: 'column', borderColor: 'black', borderWidth: 1, borderRadius: 5 },

    statistique: {
        paddingVertical:0,
        margin:5,
        paddingHorizontal:20,
        borderRadius: 3,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
      },

    container:{
      height:100,
    },
    
    Textbtn:{
      fontWeight:'bold',
      color:"#fff",
      marginLeft:50
    },
  
    btn: {
      width: 250,
      height: 60,
      marginTop:15,
      alignSelf:"center",
      backgroundColor:'#165BC0',
      textTransform:"lowercase"
    },

    label:{
      fontWeight:"bold",
      fontSize: 20, 
      marginLeft: 5 
    },

    sidebarDivider:{
      height:2,
      width:"100%",
      backgroundColor:'#165BC0',
    },

    contentInput:{ borderColor: 'black', borderWidth: 1, flexDirection: 'row', borderRadius: 9 },
    sectionFrom:{ marginHorizontal: 5, marginBottom: 30, flexDirection: 'column', }
})

export default  Evaluation ;