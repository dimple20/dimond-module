<template>
  <v-app>
    <div class="header-section">
      <!-- SYSTEM/STATUS BAR  -->
      <div>
        <v-system-bar dark>
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
      </div>

      <!-- SEARCH APP BAR  -->

      <div>
        <v-app-bar color="primary accent-4" dense dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Search</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
      </div>
    </div>
    <!-- TABS  -->
    <div class="tab-section">
      <!-- TABS SECTION FOR NEW SEARCH AND SAVED SEARCH  -->

      <v-tabs>
        <v-tab>New Search</v-tab>
        <v-tab>Saved Search</v-tab>
      </v-tabs>
    </div>

    <!-- CARD SECTION 1  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
          <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Show Only
              </v-alert>
            </div>

           
          </v-card>
        </v-row>
      </v-card>
    </v-container>
  
    <!-- CARD SECTION 2  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
          <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Shape
              </v-alert>
            </div>

          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 3  -->

    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Size
              </v-alert>
            </div>

          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 4  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Colour
              </v-alert>
            </div>

            
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 5  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
          <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Clarity
              </v-alert>
            </div>

          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 6  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Finish
              </v-alert>
            </div>

          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 7  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Cut
              </v-alert>
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 8  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Polish
              </v-alert>
            </div>
            
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 9  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Symmetry
              </v-alert>
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTIUON 10  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Fluorescence
              </v-alert>
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 11  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
          <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Grading Report
              </v-alert>
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 12 -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Location
              </v-alert>

 <v-card>
    <v-tabs v-model="tab" centered light>
      
    <v-tabs-slider></v-tabs-slider>
   
    <v-tab href="#tab-1">Diamond</v-tab>

    <v-tab href="#tab-2">Both</v-tab>

    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">

        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>

      </v-tab-item>

    </v-tabs-items>


  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-action>
               <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content> <v-list-item-title>Select Location</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>

              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-widgets</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Guaranteed Sale</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>
        </v-list>

      </v-card>
    </v-col>
  </v-row>






  </v-card>


      <!-- SEARCH APP BAR  -->

      <div>
        <v-app-bar color="primary accent-4" dense dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Search</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
      </div>
    </div>
    <!-- TABS  -->
    <div class="tab-section">
      <!-- TABS SECTION FOR NEW SEARCH AND SAVED SEARCH  -->

      <v-tabs>
        <v-tab>New Search</v-tab>
        <v-tab>Saved Search</v-tab>
      </v-tabs>
    </div>
    <!-- CARD SECTION  -->
    <v-card max-width="400" class="mx-auto my-2">
      <v-row dense>
        <v-card dark>
          <div>
            <v-alert dark color="primary" class="text-center">
              Show Only
            </v-alert>
          </div>







            
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 13  -->

    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Price
              </v-alert>
              <v-container>
                    <v-tabs class="grey lighten-5">
                      <v-tab>$/CT</v-tab>
                      <v-tab>XYZ%</v-tab>
                      <v-tab>$TOTAL</v-tab>
                    </v-tabs>
 
  <v-row>
      <v-col cols="6" sm="3">
          <v-textarea auto-grow outlined rows="" row-height="10" >
        </v-textarea>
      </v-col>

      <v-col cols="6" sm="3">
         <v-textarea auto-grow outlined rows="" row-height="10" >
          </v-textarea>
      </v-col>
    </v-row>  
  </v-container>
    
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>

    <!-- CARD SECTION 14  -->
    <v-container>
      <v-card max-width="auto" class="mx-auto my-1">
        <v-row dense>
           <v-card light width="400px">
            <div>
              <v-alert dark color="primary" class="text-center">
                Lab Report Numbers
              </v-alert>

              <v-container fluid>
                <v-row> 
                  <v-col cols="12" sm="6">
                    <v-textarea auto-grow outlined rows="1" row-height="15" >
                      </v-textarea>
                   </v-col>
                </v-row>
              </v-container>
           
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-container>
        
  </v-app>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
.v-card
{
.v-alert
{
  padding:4px;
}
}

</style>