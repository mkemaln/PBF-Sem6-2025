export default async function handler(req, res) {
    // kode wilayah menggunakan wilayah Malang, Lowokwaru, Dinoyo
    const response = await fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=35.73.05.1004`);
    const weather = await response.json();
    
    res.status(200).json(weather);
}