import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Editer = ({ onChange }) => {
    return (
        <Editor
            initialValue="<p>Initial content</p>"
            inline={false}
            init={{
                height: 500,
                plugins: 'autoresize print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                menubar: 'file edit view insert format tools table help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen code preview save print | insertfile image media template link anchor codesample | ltr rtl',
                toolbar_sticky: true,
                toolbar_mode: 'sliding',
                skin: 'oxide-dark',
                content_css: 'dark',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onChange={onChange}
        />
    )
}


export default Editer;