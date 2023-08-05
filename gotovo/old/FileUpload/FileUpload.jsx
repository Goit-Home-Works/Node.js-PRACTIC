import Cookies from 'js-cookie';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const Input = ({accept, onFiles, files, getFilesFromEvent}) => {
    const text = files.length > 0 ? 'Add more files' : 'Choose files'

    return (
        <label style={{backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3}}>
            {text}
            <input
                style={{display: 'none'}}
                type="file"
                accept={accept}
                multiple
                onChange={e => {
                    getFilesFromEvent(e).then(chosenFiles => {
                        onFiles(chosenFiles)
                    })
                }}
            />
        </label>
    )
}

const FileUpload = () => {
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }

    return (
        <Dropzone
            accept="image/*,audio/*,video/*,.pdf"
            getUploadParams={() => ({
                url: 'https://cmusy-dev.space/api/v1/profile/upload', headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`
                }
            })}
            onSubmit={handleSubmit}
            InputComponent={Input}
            getFilesFromEvent={getFilesFromEvent}
        />
    )
}

export default FileUpload;