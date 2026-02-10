
import QRCode from "qrcode";

export const orGenerate = async (req, res) => {
    try {
        const { link } = req.query;

        if(!link){
            return res.status(400).json({
                success:false,
                message:"LInk is Required"
            });
        };

        const qr = await QRCode.toDataURL(link);
        
        return res.status(200).json({
            success:true,
            message:"Qr Ganerated Successfuller",
            data: qr
        })
        
    } catch (error) {
        return res.status(500).json({
            success:true,
            message: error.message || "Or Ganerate Error"
        })
    }
}
