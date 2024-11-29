document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('livrosPorGenero_chart').getContext('2d');  // Seleciona o canvas
    const livrosPorGeneroChart = new Chart(ctx, {
        type: 'bar',  // Especificando o tipo de gráfico (pode ser 'bar', 'pie', 'doughnut', etc.)
        data: {
            labels: ['Romance', 'Fantasia', 'Ficção Científica', 'Misterio', 'Terror'],  // Rótulos para os gêneros
            datasets: [{
                label: 'Quantidade por Livros',  // Nome da série de dados (opcional)
                data: [90, 60, 22, 40, 53],  // Quantidade de livros para cada gênero
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0000CD', '#D2691E'],  // Cores para cada barra (opcional)
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,  // Faz o gráfico se ajustar à tela
            scales: {
                y: {
                    beginAtZero: true  // Garante que o eixo Y começa do zero
                }
            }
        }
    });

    // pode botar qualquer coisa aqui em baixo
    // porque sera executado apos a pagina html ser totalmente exibida, evitando conflitos.
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('autoresMaisLidos_chart').getContext('2d');  // Seleciona o canvas
    const autoresMaisLidosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ali Hyzewood', 'Kiera Kass', 'Alice Osewan', 'Bla', 'Ble'],  // Rótulos para os gêneros
            datasets: [{
                label: 'Quantidade por Autor',  // Nome da série de dados (opcional)
                data: [2, 7, 3, 4, 5],  // Quantidade de livros para cada gênero
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0000CD', '#D2691E'],  // Cores para cada barra (opcional)
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,  // Faz o gráfico se ajustar à tela
            scales: {
                y: {
                    beginAtZero: true  // Garante que o eixo Y começa do zero
                }
            }
        }
    });

    // pode botar qualquer coisa aqui em baixo
    // porque sera executado apos a pagina html ser totalmente exibida, evitando conflitos.
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('livrosLidosMes_chart').getContext('2d');  // Seleciona o canvas
    const livrosLidosMesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],  // Rótulos para os gêneros
            datasets: [{
                // label: 'Quantidade por Autor',  // Nome da série de dados (opcional)
                data: [2, 4, 5, 6, 7, 2, 5, 9, 1, 0, 0, 8],  // Quantidade de livros para cada gênero
                // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0000CD', '#D2691E'],  // Cores para cada barra (opcional)
            }]
        },
        options: {
            // indexAxis: 'y',
            responsive: true,  // Faz o gráfico se ajustar à tela
            scales: {
                y: {
                    beginAtZero: true  // Garante que o eixo Y começa do zero
                }
            }
        }
    });

    // pode botar qualquer coisa aqui em baixo
    // porque sera executado apos a pagina html ser totalmente exibida, evitando conflitos.
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('paginasLidasMes_chart').getContext('2d');  // Seleciona o canvas
    const paginasLidasMesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],  // Rótulos para os gêneros
            datasets: [{
                // label: 'Quantidade por Autor',  // Nome da série de dados (opcional)
                data: [200, 400, 500, 600, 700, 200, 500, 900, 100, 0, 0, 800],  // Quantidade de livros para cada gênero
                // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0000CD', '#D2691E'],  // Cores para cada barra (opcional)
            }]
        },
        options: {
            // indexAxis: 'y',
            responsive: true,  // Faz o gráfico se ajustar à tela
            scales: {
                y: {
                    beginAtZero: true  // Garante que o eixo Y começa do zero
                }
            }
        }
    });

    // pode botar qualquer coisa aqui em baixo
    // porque sera executado apos a pagina html ser totalmente exibida, evitando conflitos.
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('livros_chart').getContext('2d');  // Seleciona o canvas
    const livrosChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Lido', 'Não Lido', 'Lendo'],  // Rótulos para os gêneros
            datasets: [{
                // label: 'Quantidade por Autor',  // Nome da série de dados (opcional)
                data: [100, 40, 2],  // Quantidade de livros para cada gênero
                // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0000CD', '#D2691E'],  // Cores para cada barra (opcional)
            }]
        },
        options: {
            // indexAxis: 'y',
            responsive: true,  // Faz o gráfico se ajustar à tela
            scales: {
                y: {
                    beginAtZero: true  // Garante que o eixo Y começa do zero
                }
            }
        }
    });

    // pode botar qualquer coisa aqui em baixo
    // porque sera executado apos a pagina html ser totalmente exibida, evitando conflitos.
});

// const sensorStatusData = {
//     labels: ['Lidos', 'Não lidos', 'Lendo'],
//     datasets: [{
//         data: [140, 60, 3],
//         backgroundColor: [
//             'blue',
//             'red',
//             'yellow',
//         ],
//     }]
// };

// const monthlyHumidityData = {
//     labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
//     datasets: [{
//         label: 'Livros lidos',
//         data: [7, 5, 3, 2, 2],
//         backgroundColor: 'rgba(0, 128, 0, 0.8)',
//         borderColor: 'rgba(60, 179, 113, 0.6)',
//         borderWidth: 1,
//     }]
// };

// // const ctxLine = document.getElementById('humidityLineChart').getContext('2d');
// // const humidityLineChart = new Chart(ctxLine, {
// //     type: 'bar',
// //     data: {

// //         datasets: [{
// //             labels: 'Gêneros',
// //             data: [7, 5, 50, 30],
// //             backgroundColor: 'rgba(0, 128, 0, 0.8)',
// //             borderColor: 'rgba(60, 179, 113, 0.6)',
// //             borderWidth: 1,
// //         }
//             // {   label: 'Umidade Relativa (%)',
//             //     data: humidityData,
//             //     borderColor: 'rgba(60, 179, 113, 1)',
//             //     fill: false,
//             // },
//             // {
//             //     label: 'Limite Máximo (70%)',
//             //     data: new Array(timeLabels.length).fill(70),
//             //     borderColor: 'rgba(255, 0, 0, 0.7)',
//             //     borderDash: [5, 5],
//             //     pointRadius: 0,
//             //     fill: false,
//             // },
//             // {
//             //     label: 'Nivel Preocupante (50%)',
//             //     data: new Array(timeLabels.length).fill(50),
//             //     borderColor: 'orange',
//             //     borderDash: [5, 5],
//             //     pointRadius: 0,
//             //     fill: false,
//             // }
//     //     ]
//     // },
//     // options: {
//     //     indexAxis: 'y',
//     //     scales: {
//     //         y: {
//     //             beginAtZero: true,
//     //             title: {
//     //                 display: true,
//     //                 text: 'Gênero'
//     //             }
//     //         },
//     //         x: {
//     //             title: {
//     //                 display: true,
//     //                 text: 'Quantidade'
//     //             }
//     //         }
//     //     }
//     // }
// // });

// const ctxPie = document.getElementById('sensorStatusChart').getContext('2d');
// const sensorStatusChart = new Chart(ctxPie, {
//     type: 'pie',
//     data: sensorStatusData,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//         }
//     }
// });

// const ctxBar = document.getElementById('monthlyHumidityChart').getContext('2d');
// const monthlyHumidityChart = new Chart(ctxBar, {
//     type: 'bar',
//     data: monthlyHumidityData,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Umidade Média (%)'
//                 }
//             },
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Meses'
//                 }
//             }
//         }
//     }
// });

// document.getElementById('toggleButton').addEventListener('click', function () {
//     const limitDataset = {
//         label: 'Limite Máximo (70%)',
//         data: new Array(monthlyHumidityData.labels.length).fill(70),
//         backgroundColor: 'rgb(255, 0, 0)'
//     };

//     const existingDatasetIndex = monthlyHumidityChart.data.datasets.findIndex(
//         dataset => dataset.label === 'Limite Máximo (70%)'
//     );



//     if (existingDatasetIndex === -1) {
//         monthlyHumidityChart.data.datasets.push(limitDataset);
//         this.textContent = 'Remover Linha Limite';
//     } else {
//         monthlyHumidityChart.data.datasets.splice(existingDatasetIndex, 1);
//         this.textContent = 'Mostrar Linha Limite';
//     }

//     monthlyHumidityChart.update();
// });

// document.getElementById("toggleButton").addEventListener("click", function () {
//     const button = this;
//     if (button.classList.contains("mostrar")) {
//         button.classList.remove("mostrar");
//         button.classList.add("remover");
//         button.textContent = "Mostrar Linha Limite";
//     } else {
//         button.classList.remove("remover");
//         button.classList.add("mostrar");
//         button.textContent = "Remover Linha Limite";
//     }
// });

// document.getElementById('tela2').style.display = 'none'
// document.getElementById('home').style.display = 'none'


// function ver() {
//     document.getElementById('tela1').style.display = 'none';
//     document.getElementById('tela2').style.display = 'flex';
//     document.getElementById('dash-alert').style.display = 'none';
//     document.getElementById('home').style.display = 'block';

//     const alertData = {
//         labels: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
//         datasets: [
//             {
//                 label: 'Alertas Criticos: maior que 70% de Umidade',
//                 data: [4, 3, 2, 2, 0, 1, 1],
//                 backgroundColor: 'red',
//                 borderColor: 'rgba(0, 128, 0, 1)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Alertas Moderados: maior que 50% de Umidade',
//                 data: [2, 2, 4, 3, 4, 4, 3],
//                 backgroundColor: 'orange',
//                 borderColor: 'rgba(0, 128, 0, 1)',
//                 borderWidth: 1,
//             }
//         ]
//     };

//     const ctxBar = document.getElementById('alertChart').getContext('2d');
//     const alertChart = new Chart(ctxBar, {
//         type: 'bar',
//         data: alertData,
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     display: true,
//                     position: 'top',
//                     labels: {
//                         color: 'black',
//                         boxWidth: 15,
//                     }
//                 }
//             },
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     min: 1,
//                     max: 10,
//                     title: {
//                         display: true,
//                         text: 'Quantidade de Alertas'
//                     }
//                 },
//                 x: {
//                     title: {
//                         display: true,
//                         text: 'Dias da semana'
//                     }
//                 }
//             }
//         }
//     });
// }

// function voltar() {
//     document.getElementById('tela1').style.display = 'flex';
//     document.getElementById('tela2').style.display = 'none';
//     document.getElementById('home').style.display = 'none';
//     document.getElementById('dash-alert').style.display = 'block';
// }