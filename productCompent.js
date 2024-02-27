let myProductCompnent = {
    props: ["id", "createDate", "name", "imageUrl", "description", "price", "imageUrl"],
    // template: "#prductTemplate"
    methods: {
        delProd(id,name){
            console.log("意芹還在思考中");
            this.$emit('badEmoji',id,name);
            console.log("意芹抱怨完了");
        }
    },
    template: `<tr>
        <th scope="row">{{ id }}</th>
        <td><img class="w-100 h-100" :src="imageUrl"></td>
        <td>{{ name }}</td>
        <td>{{ price }}</td>
        <td>{{ description }}</td>
        <td>{{ createDate }}</td>
        <td>
            <div class="row gx-1">
                <div class="col">
                    <button class="btn btn-primary">編輯</button>
                </div>
                <div class="col">
                    <button class="btn btn-danger" @click="delProd(id,name)">刪除</button>
                </div>
            </div>
        </td>
    </tr>`
}