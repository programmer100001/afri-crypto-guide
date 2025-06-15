
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  Link, 
  Image, 
  Code, 
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";

interface WYSIWYGEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const WYSIWYGEditor = ({ content, onChange }: WYSIWYGEditorProps) => {
  const [activeFormats, setActiveFormats] = useState<string[]>([]);
  const editorRef = useRef<HTMLDivElement>(null);

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleEditorChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertImage = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      formatText('insertImage', url);
    }
  };

  const insertLink = () => {
    const url = prompt("Enter link URL:");
    if (url) {
      formatText('createLink', url);
    }
  };

  return (
    <Card className="bg-slate-900 border-slate-600">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-slate-300">Content Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-800 rounded border border-slate-600">
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('bold')}
            className="h-8 w-8 p-0"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('italic')}
            className="h-8 w-8 p-0"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('underline')}
            className="h-8 w-8 p-0"
          >
            <Underline className="h-4 w-4" />
          </Button>
          
          <Separator orientation="vertical" className="h-6 mx-1" />
          
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('justifyLeft')}
            className="h-8 w-8 p-0"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('justifyCenter')}
            className="h-8 w-8 p-0"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('justifyRight')}
            className="h-8 w-8 p-0"
          >
            <AlignRight className="h-4 w-4" />
          </Button>
          
          <Separator orientation="vertical" className="h-6 mx-1" />
          
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('insertUnorderedList')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={insertLink}
            className="h-8 w-8 p-0"
          >
            <Link className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={insertImage}
            className="h-8 w-8 p-0"
          >
            <Image className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('formatBlock', 'blockquote')}
            className="h-8 w-8 p-0"
          >
            <Quote className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => formatText('formatBlock', 'pre')}
            className="h-8 w-8 p-0"
          >
            <Code className="h-4 w-4" />
          </Button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleEditorChange}
          className="min-h-[300px] p-4 bg-white text-black rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          style={{ lineHeight: '1.6' }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Rich text editor with formatting options</span>
          <span>Auto-save enabled</span>
        </div>
      </CardContent>
    </Card>
  );
};
