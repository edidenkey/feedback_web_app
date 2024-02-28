<template>
    <div>
        <template v-for="(item, index) in myValues" :key="index">
            <p style="display:inline-block">
                <span style="font-size: 16px;" class="mr-2" v-if="item.isString">{{item.text}}</span>
                <v-select v-model="mymodel[index]" class="mr-2" density="compact" variant="underlined" style="width: 70px" v-else :items="item.answers"></v-select>
            </p>
        </template>
    </div>
</template>

<script>
  export default {
    props: {
        items: {
            type: String,
            default: '',
            required: true,
        },
        mymodel: {
            type: Array,
            default: [],
            required: true,
        },
    },
    data: () => ({
        myValues: [],
    }),
    created(){
        this.getSelectAnswer()
    },
    methods: {
        getSelectAnswer(){
            let regex =  /\[\[.*\]\]/
            var anotherItem = ""
            var myitem = this.items
            let localAnswers = regex.exec(this.items);
            localAnswers.forEach((element,index) => {
                anotherItem = myitem.replace(element,index)
            });
            var anotherTab = anotherItem.split(" ")
            anotherTab.forEach(element => {
                if (!isNaN(element)) {
                    if(!!element){
                        var answerValue = localAnswers[parseInt(element)]
                        let firstText = answerValue.replace("[[", "")
                        let secondText = firstText.replace("]]", "")
                        let last = secondText.split('|')
                        this.myValues.push({isString:false,answers:last})
                    }
                }else{
                    this.myValues.push({isString:true,text:`${element} `})
                }
            });
        },
    },
  }
</script>