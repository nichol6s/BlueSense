import { View, Text, Alert, ScrollView, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase-config";

import Button from '@/components/Button';
import { Input } from '@/components/Input';
import IncidentReport from '@/components/IncidentReport';

type Incident = {
  id: string;
  routeName: string;
  description: string;
  shipIMO: number;
  status: string;
};

export default function HomeScreen() {
  const [routeName, setRouteName] = useState("");
  const [description, setDescription] = useState("");
  const [shipIMO, setShipIMO] = useState("");
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [submit, setSubmit] = useState(false)

  async function addIncident() {
    if (routeName && description && shipIMO) {
      try {
        const docRef = await addDoc(collection(db, "incidents"), {
          routeName,
          description,
          shipIMO: Number(shipIMO),
          status: "Em andamento"
        });
        Alert.alert("Chamado", "Chamado cadastrado com sucesso!")
        setRouteName("");
        setDescription("");
        setShipIMO("");
        Keyboard.dismiss();
        getIncident();
      } catch (e) {
        Alert.alert("Chamado", "Erro ao cadastrar chamado: ");
        console.log(e)
      }
    } else {
      console.log("Missing fields: ", { routeName, description, shipIMO });
      Alert.alert("Chamado", "Preencha todos os campos!")
    }
  }

  async function getIncident() {
    let d: Incident[] = []
    const querySnapshot = await getDocs(collection(db, "incidents"))
    querySnapshot.forEach((doc) => {
      const incidents = {
        id: doc.id,
        routeName: doc.data().routeName,
        description: doc.data().description,
        shipIMO: doc.data().shipIMO,
        status: doc.data().status
      }
      d.push(incidents)
    })
    setIncidents(d)
  }

  useEffect(() => {
    if (submit) {
      addIncident();
      setSubmit(false)
    }
    getIncident()
  }, [submit]);

  return (
    <LinearGradient
      colors={['#d4e9ff', '#f3f7fc']}
      start={[0, 0]}
      end={[0, 0.7]}
      className='flex-1 py-8 px-6'
    >
      <View className='gap-4'>
        <Text className='text-black font-semibold text-[28px] mt-6'>Cadastre um chamado</Text>

        <Input>
          <FontAwesome6 name="location-dot" color="gray" size={12} />
          <Input.Field
            placeholder="Rota náutica"
            value={routeName}
            onChangeText={setRouteName}
          />
        </Input>

        <Input>
          <MaterialIcons name="description" color="gray" size={12} />
          <Input.Field
            placeholder="Pequena descrição"
            maxLength={40}
            value={description}
            onChangeText={setDescription}
            showCharacterCount={true}
          />
        </Input>

        <Input>
          <FontAwesome5 name="ship" color="gray" size={12} />
          <Input.Field
            placeholder="IMO do Navio"
            keyboardType='numeric'
            value={shipIMO}
            onChangeText={setShipIMO}
          />
        </Input>

        <Button title="Adicionar" onPress={() => setSubmit(true)} />
      </View>

      <View className='items-left border-b border-b-black py-4 mt-6'>
        <Text className='text-[16px] font-semibold'>Chamados</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {incidents.map((item, index) => (
          <IncidentReport
            key={index}
            description={item.description}
            routeName={item.routeName}
            shipIMO={item.shipIMO}
            status={item.status}
            id={item.id}
            setIncidents={setIncidents}
            incidents={incidents}
          />

        ))}
      </ScrollView>

    </LinearGradient>
  );
}