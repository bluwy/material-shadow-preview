<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="display-1">Download</h4>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex>
                CSS
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <v-btn color="primary">Download</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <p>
              Copy of <a href="https://vuetifyjs.com">Vuetify</a>'s compiled shadows CSS.
              Please include the license too.
            </p>
            <highlight-code class="code-theme" lang="css">
              /*!
              * Vuetify v2.0.0
              * Forged by John Leider
              * Released under the MIT License.
              */
              .elevation-0 {
                box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12);
              }
              .elevation-1 {
                box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
              }
              .elevation-2 {
                box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
              }
              .elevation-3 {
                box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
              }
              .elevation-4 {
                box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
              }
              .elevation-5 {
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
              }
              .elevation-6 {
                box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
              }
              .elevation-7 {
                box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12);
              }
              .elevation-8 {
                box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
              }
              .elevation-9 {
                box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12);
              }
              .elevation-10 {
                box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12);
              }
              .elevation-11 {
                box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2), 0px 11px 15px 1px rgba(0,0,0,0.14), 0px 4px 20px 3px rgba(0,0,0,0.12);
              }
              .elevation-12 {
                box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);
              }
              .elevation-13 {
                box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 13px 19px 2px rgba(0,0,0,0.14), 0px 5px 24px 4px rgba(0,0,0,0.12);
              }
              .elevation-14 {
                box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2), 0px 14px 21px 2px rgba(0,0,0,0.14), 0px 5px 26px 4px rgba(0,0,0,0.12);
              }
              .elevation-15 {
                box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2), 0px 15px 22px 2px rgba(0,0,0,0.14), 0px 6px 28px 5px rgba(0,0,0,0.12);
              }
              .elevation-16 {
                box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
              }
              .elevation-17 {
                box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2), 0px 17px 26px 2px rgba(0,0,0,0.14), 0px 6px 32px 5px rgba(0,0,0,0.12);
              }
              .elevation-18 {
                box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2), 0px 18px 28px 2px rgba(0,0,0,0.14), 0px 7px 34px 6px rgba(0,0,0,0.12);
              }
              .elevation-19 {
                box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2), 0px 19px 29px 2px rgba(0,0,0,0.14), 0px 7px 36px 6px rgba(0,0,0,0.12);
              }
              .elevation-20 {
                box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2), 0px 20px 31px 3px rgba(0,0,0,0.14), 0px 8px 38px 7px rgba(0,0,0,0.12);
              }
              .elevation-21 {
                box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2), 0px 21px 33px 3px rgba(0,0,0,0.14), 0px 8px 40px 7px rgba(0,0,0,0.12);
              }
              .elevation-22 {
                box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2), 0px 22px 35px 3px rgba(0,0,0,0.14), 0px 8px 42px 7px rgba(0,0,0,0.12);
              }
              .elevation-23 {
                box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2), 0px 23px 36px 3px rgba(0,0,0,0.14), 0px 9px 44px 8px rgba(0,0,0,0.12);
              }
              .elevation-24 {
                box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
              }
            </highlight-code>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex>
                SCSS
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <v-btn color="primary">Download</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <p>
              Modified version of Google's
              <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation">elevation mixin</a>.
              Please include the license too.
            </p>
            <highlight-code class="code-theme" lang="scss">
              // material-components-web
              // Copyright 2017 Google Inc.
              // Released under the MIT License.
              $umbra-map: (
                0: "0px 0px 0px 0px",
                1: "0px 2px 1px -1px",
                2: "0px 3px 1px -2px",
                3: "0px 3px 3px -2px",
                4: "0px 2px 4px -1px",
                5: "0px 3px 5px -1px",
                6: "0px 3px 5px -1px",
                7: "0px 4px 5px -2px",
                8: "0px 5px 5px -3px",
                9: "0px 5px 6px -3px",
                10: "0px 6px 6px -3px",
                11: "0px 6px 7px -4px",
                12: "0px 7px 8px -4px",
                13: "0px 7px 8px -4px",
                14: "0px 7px 9px -4px",
                15: "0px 8px 9px -5px",
                16: "0px 8px 10px -5px",
                17: "0px 8px 11px -5px",
                18: "0px 9px 11px -5px",
                19: "0px 9px 12px -6px",
                20: "0px 10px 13px -6px",
                21: "0px 10px 13px -6px",
                22: "0px 10px 14px -6px",
                23: "0px 11px 14px -7px",
                24: "0px 11px 15px -7px"
              );

              $penumbra-map: (
                0: "0px 0px 0px 0px",
                1: "0px 1px 1px 0px",
                2: "0px 2px 2px 0px",
                3: "0px 3px 4px 0px",
                4: "0px 4px 5px 0px",
                5: "0px 5px 8px 0px",
                6: "0px 6px 10px 0px",
                7: "0px 7px 10px 1px",
                8: "0px 8px 10px 1px",
                9: "0px 9px 12px 1px",
                10: "0px 10px 14px 1px",
                11: "0px 11px 15px 1px",
                12: "0px 12px 17px 2px",
                13: "0px 13px 19px 2px",
                14: "0px 14px 21px 2px",
                15: "0px 15px 22px 2px",
                16: "0px 16px 24px 2px",
                17: "0px 17px 26px 2px",
                18: "0px 18px 28px 2px",
                19: "0px 19px 29px 2px",
                20: "0px 20px 31px 3px",
                21: "0px 21px 33px 3px",
                22: "0px 22px 35px 3px",
                23: "0px 23px 36px 3px",
                24: "0px 24px 38px 3px"
              );

              $ambient-map: (
                0: "0px 0px 0px 0px",
                1: "0px 1px 3px 0px",
                2: "0px 1px 5px 0px",
                3: "0px 1px 8px 0px",
                4: "0px 1px 10px 0px",
                5: "0px 1px 14px 0px",
                6: "0px 1px 18px 0px",
                7: "0px 2px 16px 1px",
                8: "0px 3px 14px 2px",
                9: "0px 3px 16px 2px",
                10: "0px 4px 18px 3px",
                11: "0px 4px 20px 3px",
                12: "0px 5px 22px 4px",
                13: "0px 5px 24px 4px",
                14: "0px 5px 26px 4px",
                15: "0px 6px 28px 5px",
                16: "0px 6px 30px 5px",
                17: "0px 6px 32px 5px",
                18: "0px 7px 34px 6px",
                19: "0px 7px 36px 6px",
                20: "0px 8px 38px 7px",
                21: "0px 8px 40px 7px",
                22: "0px 8px 42px 7px",
                23: "0px 9px 44px 8px",
                24: "0px 9px 46px 8px"
              );

              @mixin elevation($dp) {
                @if dp &lt; 0 or dp &gt; 24 {
                  @error "$dp received must be between 0 and 24, but received '#{$dp}'";
                }
                box-shadow: map-get($umbra-map, $dp) rgba(black, .2), map-get($penumbra-map, $dp) rgba(black, .14), map-get($ambient-map, $dp) rgba(black, .12);
              }
            </highlight-code>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Download'
}
</script>

<style>

</style>
