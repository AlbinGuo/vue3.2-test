<template>
    <a-card title="Form表单">
        <div>
            <div>Picked: {{ picked }}</div>

            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>

            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
        </div>
        <div>
            <div>Checked names: {{ checkedNames }}</div>

            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
            <label for="jack">Jack</label>

            <input type="checkbox" id="john" value="John" v-model="checkedNames" />
            <label for="john">John</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
            <label for="mike">Mike</label>
        </div>
        <div>
            selected: {{selected}}
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option value="A-id">A</option>
                <option value="B-id">B</option>
                <option value="C-id">C</option>
            </select>
        </div>
        <div>
            selected2: {{ selected2 }}
            <select v-model="selected2">
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        <div>
            toggle: {{ toggle }}
            <input type="checkbox" v-model='toggle' true-value='yes' false-value='no'/>
            toggle2: {{ toggle2 }}
            <input type="checkbox" v-model='toggle2' :true-value='dynamicTrueValue' :false-value='dynamicFalseValue'/>
        </div>
        <div>
            selected3: {{ selected3 }}
            <select v-model="selected3">
                <option v-for='option in options' :value="option">{{ option.text }}</option>
            </select>
        </div>
        <div>
             <p>在 "change" 事件后同步更新而不是 "input"</p>
            <p>msg: {{ msg }}</p>
            <input v-model.lazy="msg" />
        </div>
        <div>
            <p>.number</p>
            <p>numberText: {{ numberText }}</p>
            <input v-model.number="numberText" />
        </div>
        <div>
            <p>.trim</p>
            <p>trimText: {{ trimText }}</p>
            <input v-model.trim="trimText" />
        </div>
    </a-card>
</template>

<script lang='ts' setup>
const checkedNames = ref([]);
const picked = ref('One');
const selected = ref('');
const selected2 = ref('');
const selected3 = ref('');
const options = [
    { text: '苹果', value: 'apple' },
    { text: '桔子', value: 'orange' },
    { text: '香蕉', value: 'boanana' },
]
const toggle = ref('');
const toggle2 = ref('');
const dynamicTrueValue = ref<string>('Y');
const dynamicFalseValue = ref<string>('N');
const msg = ref<string>('');
const numberText = ref<string>('0');
const trimText = ref<string>('');
</script>