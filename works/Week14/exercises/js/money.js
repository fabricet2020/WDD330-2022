// Custom Loader Element Node
var loader = document.createElement('div')
loader.setAttribute('id', 'pre-loader');
loader.innerHTML = "<div class='lds-hourglass'></div>";

// Loader Start Function
window.start_loader = function() {
    if (!document.getElementById('pre-loader') || (!!document.getElementById('pre-loader') && document.getElementById('pre-loader').length <= 0))
        document.querySelector('body').appendChild(loader)
}

// Loader Stop Function
window.end_loader = function() {
    if (!!document.getElementById('pre-loader')) {
        setTimeout(() => {
            document.getElementById('pre-loader').remove()
        }, 500)
    }
}
const el_msg = $('<div>')
el_msg.addClass('alert pop-msg rounded-0')
el_msg.html("<div class='d-flex w-100 align-items-center justify-content-between'><div class='msg'></div><div class='text-end'><button class='btn-close'></button></div></div>")
el_msg.hide()
el_msg.find('.btn-close').click(function() {
    console.log('close')
    el_msg.remove()
})

function show_msg(node = null) {
    if (node != null) {
        $('#msg-field').append(node)
        node.show('slideDown')
        node.find('.btn-close').click(function() {
            console.log('close')
            node.remove()
        })
    }
}

function load_table() {
    var registered = !!localStorage.getItem('registered') ? $.parseJSON(localStorage.getItem('registered')) : {};
    $('#registerd-tbl tbody').html('')
    var i = 1;
    Object.keys(registered).map(k => {
        var data = registered[k]
        var tr = $("<tr>")
        tr.append('<td class="px-2 py-1 text-center align-middle">' + (i++) + '</td>')
        tr.append('<td class="px-2 py-1 align-middle">' + (data.id) + '</td>')
        tr.append('<td class="px-2 py-1 align-middle">' + (data.first_name + '<br>' + data.last_name) + '<br><strong>ID:</strong> ' + (data.id_number) + '<br><strong>Contact:</strong> ' + (data.contact) +'</td>')
        tr.append('<td class="px-2 py-1 align-middle">' + (data.first_name2 + '<br>' + data.last_name2) + '<br><strong>ID:</strong> ' + (data.id_number2) + '<br><strong>Contact:</strong> ' + (data.contact2) +'</td>')
        
        tr.append('<td class="px-2 py-1 align-middle">' + (data.remarks) + '</td>')

        tr.append('<td class="px-2 py-1 align-middle text-center"><button class="btn btn-sm mx-1 rounded-0 btn-outline-primary bg-gradient edit-data" title="Edit Data" value="Edit Data"><i class="fa fa-edit"></i>Edit Data</button><button class="btn btn-sm mx-1 rounded-0 btn-outline-danger bg-gradient delete-data" title="Delete Data"><i class="fa fa-trash"></i>Delete Data</button></td>')
        $('#registerd-tbl tbody').append(tr)
        tr.find('.edit-data').click(function() {
            start_loader()
            form = $('#registration-form')

            form.find('[name="id"]').val(data.id)

            form.find('[name="first_name"]').val(data.first_name).focus()
            form.find('[name="last_name"]').val(data.last_name)
            form.find('[name="id_number"]').val(data.id_number)
            form.find('[name="contact"]').val(data.contact)
            form.find('[name="remarks"]').val(data.remarks)

            form.find('[name="first_name2"]').val(data.first_name2)             
            form.find('[name="last_name2"]').val(data.last_name2)
            form.find('[name="id_number2"]').val(data.id_number2)
            form.find('[name="contact2"]').val(data.contact2)
            form.find('[name="remarks2"]').val(data.remarks2)
              


            $('html, body').scrollTop(0)
            end_loader()
        })
        tr.find('.delete-data').click(function() {
            start_loader()
            if (confirm("Are you sure to delete '" + data.id + "' data from list?") === true) {
                var msg = el_msg.clone()
                delete registered[data.id];
                try {
                    localStorage.setItem('registered', JSON.stringify(registered));
                    msg.addClass('alert-success')
                    msg.find('.msg').text('Data has been deleted successfully.')
                    load_table()
                } catch (err) {
                    msg.addClass('alert-danger')
                    msg.find('.msg').text('Data has failed to delete.')
                }
                show_msg(msg)
            }
            end_loader()
        })
    })
}

function exportToCSV() {
    var table = $("#registerd-tbl");
    var rows = [];
    rows.push(['No', 'Transaction ID', 'Sender Details', 'Receiver Details', 'Amount Sent'])
    table.find("tbody tr").each(function() {
        rows.push([$(this).find('td:nth-child(1)').text(), $(this).find('td:nth-child(2)').text(), $(this).find('td:nth-child(3)').text(), $(this).find('td:nth-child(4)').text(), $(this).find('td:nth-child(5)').text()])
    })

    content = "data:text/csv;charset=utf-8,";
    rows.forEach(function(arr) {
        row = arr.join(",");
        content += row + "\r\n";
    });

    var a = document.createElement('a');
    a.setAttribute("href", encodeURI(content));
    a.setAttribute("download", "registered-data.csv");
    document.querySelector('body').appendChild(a);
    a.click()
    setTimeout(() => {
        a.remove()
    }, 500)
}

$(function() {
    load_table()
    end_loader();
    $('#export').click(function() {
        exportToCSV()
    })
    $('#search').on('input', function() {
        var search = $(this).val().toLowerCase()
        $('#registerd-tbl tbody tr').each(function() {
            var text = $(this).text().toLowerCase()
            if (text.includes(search) == true) {
                $(this).toggle(true)
            } else {
                $(this).toggle(false)
            }
        })
    })
    $('#registration-form').submit(function(e) {
        e.preventDefault()
        $('.pop-msg').remove()
        var msg = el_msg.clone()
        _this = $(this)
        start_loader()
        var registered = !!localStorage.getItem('registered') ? $.parseJSON(localStorage.getItem('registered')) : {};

        id = $(this).find('[name="id"]').val()
        fname = $(this).find('[name="first_name"]').val()
        lname = $(this).find('[name="last_name"]').val()
        idnumber = $(this).find('[name="id_number"]').val()
        contact = $(this).find('[name="contact"]').val()
        remarks = $(this).find('[name="remarks"]').val()

        fname2 = $(this).find('[name="first_name2"]').val()
        lname2 = $(this).find('[name="last_name2"]').val()
        idnumber2 = $(this).find('[name="id_number2"]').val()
        contact2 = $(this).find('[name="contact2"]').val()
        remarks2 = $(this).find('[name="remarks2"]').val() 

        if (id == '') {
            while (true) {
                id = Math.floor(Math.random() * 99999999)
                if ($.inArray(id, Object.keys(registered)) < 0) {
                    break;
                }
            }
        }
        registered[id] = {
            id: id,
            first_name: fname,
            id_number: idnumber,
            last_name: lname,
            contact: contact,
            remarks: remarks,

            first_name2: fname2,
            last_name2: lname2,
            id_number2: idnumber2,
            contact2: contact2,
                  
        }
        try {
            localStorage.setItem('registered', JSON.stringify(registered))
            msg.addClass('alert-success')
            msg.find('.msg').text('Data has been saved successfully.')
            _this[0].reset()
            load_table()
        } catch (err) {
            console.error(err)
            msg.addClass('alert-danger')
            msg.find('.msg').text('Data has failed to save due to unknown error.')
        }
        show_msg(msg)
        end_loader()

    })
    $('#registration-form').on('reset', function(e) {
        $(this).find('input:hidden').val('')
    })
})


