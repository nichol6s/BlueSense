import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesome, FontAwesome5, FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/services/firebase-config";

type IncidentReportProps = {
    description: string;
    routeName: string;
    shipIMO: number;
    status?: string;
    id: string;
    setIncidents: (incidents: any[]) => void;
    incidents: any[];
};

export default function IncidentReport({ description, routeName, shipIMO, status = "Em andamento", id, setIncidents, incidents }: IncidentReportProps) {
    const [currentStatus, setCurrentStatus] = useState(status)

    async function updateStatus() {
        try {
            const newStatus = currentStatus === "Em andamento" ? "Encerrado" : "Em andamento";
            const incidentRef = doc(db, "incidents", id);
            await updateDoc(incidentRef, { status: newStatus });
            setCurrentStatus(newStatus);
        } catch (e) {
            Alert.alert("Chamado", "Erro ao atualizar chamado")
            console.error("Erro ao atualizar: ", e);
        }
    }

    async function deleteIncident() {
        try {
            await deleteDoc(doc(db, "incidents", id));
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (e) {
            Alert.alert("Chamado", "Erro ao deletar chamado")
            console.error("Erro ao deletar: ", e);
        }
    }

    return (
        <View className='flex-1 w-full h-[120] bg-blue-100 rounded-lg mt-6 p-4 gap-1'>
            <Text className='text-lg'>{description}</Text>

            <View className='flex-row items-center justify-between gap-1 mt-2'>
                <View className='flex-row items-center'>
                    <FontAwesome6 name="location-dot" color="gray" size={10} />
                    <Text className='text-sm'> {routeName}</Text>
                </View>

                <View className='flex-row items-center'>
                    <FontAwesome5 name="ship" color="gray" size={10} />
                    <Text className='text-sm'> {shipIMO.toString()}</Text>
                </View>

                <View className='flex-row gap-8'>
                    <Pressable className='active:opacity-50' onPress={updateStatus}>
                        <MaterialIcons name="edit" color="green" size={28} />
                    </Pressable>

                    <Pressable className='active:opacity-50' onPress={deleteIncident}>
                        <Feather name="trash" color="red" size={28} />
                    </Pressable>
                </View>
            </View>

            <View className='flex-row items-center gap-1'>
                <FontAwesome name="circle" color={currentStatus === "Em andamento" ? "blue" : "red"} size={10} />
                <Text className='text-sm'>{currentStatus}</Text>
            </View>
        </View>
    );
}