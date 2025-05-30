// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import { Controller } from "react-hook-form";

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   return (
//     <div className="w-full">
//       {label && <label className="inline-block mb-1 pl-1">{label}</label>}

//       <Controller
//         name={name || "Content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey='758b8okue93p6921o30gvrenadyqvo0b8f5taael6m1un9dc'
//             initialValue={defaultValue}
//             init={{
//               height: 500,
//               menubar: true,
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//               content_style:
//                 "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//               spellcheck: true,
//               browser_spellcheck: true,
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }


import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "Content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Editor
            apiKey="758b8okue93p6921o30gvrenadyqvo0b8f5taael6m1un9dc"
            value={field.value}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              spellcheck: true,
              browser_spellcheck: true,
            }}
            onEditorChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
    </div>
  );
}
