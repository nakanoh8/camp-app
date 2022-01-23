<template>
  <!-- <v-app id="inspire"> -->
  <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

  <!-- <v-main> -->
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-sheet color="grey lighten-4" class="pa-4">
          <v-avatar
            class="mb-4"
            color="grey darken-1"
            src="../assets/logo.png"
            size="64"
          >
            <v-img :src="require('../assets/logo.svg')" contain />
          </v-avatar>

          <div>nakano hayato</div>
          <div>john@vuetifyjs.com</div>
          <br />
          <div>キャンプ歴: 1年</div>
          <br />
          <div>フォロー中: 100人 フォロワー: 20人</div>
          <div>気になるリスト</div>
          <br />
          <div>キャンプ歴1年の初心者です。キャンプにハマってます。</div>
          <br />
          <div>Twitter: john@vuetifyjs.com</div>
          <div>Instagram: john@vuetifyjs.com</div>
          <div>YouTube: john@vuetifyjs.com</div>
          <div>TikTok: john@vuetifyjs.com</div>
        </v-sheet>
      </v-col>

      <v-col cols="8"> Camp Gears </v-col>
      <v-col cols="4" align="end"> Add Edit</v-col>

      <v-col cols="12">
        <v-card>
          <div v-for="card in cards" :key="card">
            <v-subheader>{{ card }}</v-subheader>

            <v-list three-line>
              <template v-for="n in 3">
                <v-list-item :key="n">
                  <v-list-item-avatar size="64">
                    <v-img :src="require('../assets/tent_sample.png')" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>[ Snow Perk ] アメニティドームM</v-list-item-title>

                    <v-list-item-subtitle>
                      ⭐️⭐️⭐️⭐️ 4.2 &emsp; 所有ユーザ数: 250人 &emsp;
                      気になる登録数: 88人 &emsp; 購入日: 2021/12/12（使用期間: 1ヶ月）
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                      amazon rakuten merucari google
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="n !== 3"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </div>
        </v-card>
      </v-col>

      <v-col cols="8"> Visited Camp Sites </v-col>
      <v-col cols="4" align="end"> Add Edit</v-col>

      <v-col cols="12">
        <v-card>
          <div v-for="card in cards2" :key="card">
            <v-subheader>{{ card }}</v-subheader>

            <v-list three-line>
              <template v-for="n in 3">
                <v-list-item :key="n">
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/site_sample.png')" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      >ほったらかしキャンプ場</v-list-item-title
                    >

                    <v-list-item-subtitle>
                      ⭐️⭐️⭐️⭐️ 4.8 &emsp; 訪問回数: 2回 &emsp; 最終訪問日: 2021/12/25
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                      訪問ユーザ数: 580人 &emsp;
                      気になる登録数: 122人 &emsp; 
                      ホームページ &emsp; なっぷ
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="n !== 3"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-main> -->
  <!-- </v-app> -->
</template>

<script>
export default {
  data: () => ({
    cards: ["Tent", "Chair", "Table"],
    cards2: ["山梨", "長野", "北海道"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Home"],
      ["mdi-send", "Search"],
      ["mdi-delete", "Me"],
      ["mdi-alert-octagon", "Setting"],
    ],
    gears: [
      {
        name: "アメニティドームM",
        categoly_id: "tent",
        UserGears: {},
      },
    ],
    sites: [],
  }),
};
</script>