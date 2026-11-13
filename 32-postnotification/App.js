import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import notifee, { AuthorizationStatus, EventType, AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';

export default function App() {
  const [statusNotification, setStatusNotification] = useState(true);

  useEffect(() => {
    async function getPermission() {
      const settings = await notifee.requestPermission();
      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log("Permission", settings.authorizationStatus);
        setStatusNotification(true);
      } else {
        console.log("Usuário negou a permissão!");
        setStatusNotification(false);
      }
    }
    getPermission();
  }, []);

  //Notificação de background - quando o app estiver mininazado ou fechado
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if (type == EventType.PRESS) {
      console.log("Clicou na notificação do Background: ", pressAction?.id)
      if (notification?.id) {
        await notifee.cancelNotification(notification?.id)
      }
    }
    console.log("Evento do Bacoground")
  })

  //Evento que aparece na tela aberta 
  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('Usuário descartou a notificação');
          break;
        case EventType.PRESS:
          console.log("Tocou na notificação", detail.notification);
          break;
      }
    });
  }, []);

  async function handleNotificate() {
    if (!statusNotification) {
      return;
    }

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'Lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      id: 'atencao',
      title: 'Produto em Promoção',
      body: 'Veja agora as nossas promoções de Black Friday!',
      android: {
        channelId: channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  async function handleNewNotification() {
    const date = new Date(Date.now())

    date.setMinutes(date.getMinutes() + 3);


    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    await notifee.createTriggerNotification({
      title: "Lembrente para Hoje",
      body: "Estudar notificações do React Native ainda hoje",
      android: {
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default'
        }
      }
    }, trigger)
  }

  function handleListNotifications() {
    notifee.getTriggerNotificationIds()
      .then((ids) => {
        console.log(ids)
      })
  }

  async function handleCancelNotification() {
    notifee.cancelNotification("")
  }

  async function handleWeekly() {
    const date = new Date(Date.now());

    date.setMinutes(date.getMinutes() + 1);

    const trigger = {
      type:   TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      RepeatFrequency: RepeatFrequency.WEEKLY
    }
    
    await notifee.createTriggerNotification({
      title: 'Lembrete - React Native',
      body: "Estude semanalmente",
      android: {
        channelId: "lembrete",
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: "default"
        }
      }
    }, trigger)
    
  }

  return (
    <View style={styles.container}>
      <Text>Notificações APP</Text>
      <Button title="Enviar notificação" onPress={handleNotificate} />

      <Button title="Agendar Notificação" onPress={handleNewNotification} />

      <Button title="Listar Notificações" onPress={handleListNotifications} />

      <Button title="Cancelar notificação agendada" onPress={handleCancelNotification} />

      <Button title="Agendar Semanalmente" onPress={handleWeekly} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
});