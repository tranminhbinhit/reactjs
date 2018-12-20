import $ from 'jquery'

class Request{
    static get(url, data, prev_action = null) {
        let suffix = "";
        if (data !== null) {
            suffix = "?";
            for (let key in data) {
                suffix = suffix + key + "=" + data[key] + "&";
            }
        }
        return $.ajax({
            url: url + suffix,
            type: "GET",
            crossDomain: true,
            // contentType: "text/plain",
            //dataType: "application/json",
            // headers: {
            //     'x-foody-client-id': '0000',
            //     'x-foody-client-type': 3,
            //     'x-foody-app-type': 1005,
            //     'x-foody-client-version': 1234,
            //     'x-foody-api-version': 1,
            //     'x-foody-access-token': 'accessToken'
            // },
            success: (response) => {
                if(typeof(prev_action) === "function"){
                    prev_action(response);
                }
            },
            error: (jqXHR) => {
                if(typeof(prev_action) === "function"){
                    prev_action(jqXHR);
                }
            },
            statusCode: {
                403: () => {
                //todo
                },
                404: () => {
                //todo
                }
            },
        });
    }

    static post(url, data, prev_action = null) {
        return $.ajax({
            url: url,
            type: "POST",
            data : data,
            crossDomain: true,
            // contentType: "application/json",
            dataType: "application/json",
            headers: {
                
            },
            success: (response) => {
                debugger
                if(typeof(prev_action) === "function"){
                    prev_action(response);
                }
            },
            error: (jqXHR) => {
                if(typeof(prev_action) === "function"){
                    prev_action(jqXHR);
                }
            },
            statusCode: {
                403: () => {
                //todo
                },
                404: () => {
                //todo
                },
                200: () => {
                    debugger
                }
            },
        });
    }
}

export default Request;