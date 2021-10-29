import React from "react";

export function GetImgFromLocalSrc(file: string) {
    
    
        
        const reader = new FileReader();
        console.log(reader);
        reader.onload = (((e: ProgressEvent<FileReader>) => {
            //referencia al objeto img 

            
                if (typeof e.target?.result! === 'string') {
                    //aqui es donde sucede la asignación del src

                    console.log(e.target?.result);
                    return e.target?.result!;
                } else {
                    console.log("Porfavor adjunte una imagen válida")
                }

            


        }) as any)
        //reader.readAsDataURL(event.target.files[0]);

    
}