$(document).ready( function () {
    const options = {
        ajax: {
            url: './sources.json',
            dataSrc: 'sources'
        },
        columns: [
            { data: 'Name' },
            { data: 'Description' },
            { data: 'Language' },
            { data: 'Announce only' },
            { data: 'Status' },
            { data: 'Url' },
        ],
        columnDefs: [
            {
                targets: [3, 4, 5],
                render: function (data) {

                    const styleMap = {
                        'Yes': {
                            labelType: 'default',
                            style: 'color: #50992a;'
                        },
                        'No': { 
                            labelType: 'default',
                            style: 'color: #a05262;'
                        },
                        'Active': {
                            labelType: 'success',
                            style: 'border: #0FB492 .5px solid; color: #9b9b9b;'
                        },
                        'Dead': {
                            labelType: 'danger',
                            style: 'border: #d9534f .5px solid; color: #9b9b9b;'
                        }
                    };

                    const styles = styleMap[data];

                    if (styles) {
                        const labelType = styles.labelType || 'default';
                        const style = styles.style || '';
                        return `<span class="label label-${labelType}" style="background-color: rgba(26, 26, 26, 1); ${style}"> ${data} </span>`;
                    }

                    return data;
                }
            }
        ],
        paging: false,
        responsive: true,
        fixedHeader: true,
        order: [[ 0, "asc" ]]
    };
    const table = $('#table').DataTable(options);
} );
