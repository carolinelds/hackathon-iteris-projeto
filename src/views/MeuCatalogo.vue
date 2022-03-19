<template>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined 
     >
        <v-list-item three-line 
        v-for="item of catalogoLista" :key="item.id">
        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        >
            <v-img :src="item.imagem"></v-img>
        </v-list-item-avatar>

        <div class="text mb-4">
            {{ item.nome }}
        </div>
        
        <v-card-actions>
            <v-btn
                outlined
                rounded
                text
            >
                Adicionar
            </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        </v-list-item>
  </v-card>
</template>

<script>
    export default {
        name: 'CatalogoLista',
        data() {
        return {
            catalogoLista: []
        }
        },
        created() {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
                .then(response => response.json())
                .then(json => {
                this.catalogoLista = json;
            })
        }
    }
</script>