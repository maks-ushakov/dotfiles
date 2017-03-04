"Use Vim, no vi default
set nocompatible

"Turn on filetype plugin
filetype plugin on

"Vundle
filetype off

" set the runtime path to include Vundle and initialize
 set rtp+=~/.vim/bundle/Vundle.vim
 call vundle#begin()
 " alternatively, pass a path where Vundle should install plugins
 "call vundle#begin('~/some/path/here')

 " let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'

" Pretty colorscheme
Plugin 'lsdr/monokai'
 " The following are examples of different formats supported.
 " Keep Plugin commands between vundle#begin/end.
 " plugin on GitHub repo
Plugin 'tpope/vim-fugitive'

" Easy Deal with buffers: \be
Plugin 'jlanzarotta/bufexplorer'

" File commander near open buffer:  :NERDTree
Plugin 'git://github.com/scrooloose/nerdtree.git'

" Provides easy code commenting: \cc \cu \cn \cs
Bundle 'git://github.com/scrooloose/nerdcommenter.git'

Plugin 'git://repo.or.cz/vcscommand'

"Plugin 'Valloric/YouCompleteMe'

Plugin 'scrooloose/syntastic'

" TextMate-like snippets
Bundle 'git://github.com/vim-scripts/UltiSnips.git'

" RegExp search
Bundle 'git://github.com/mileszs/ack.vim.git'

"
"HTML/Templateters
"
Plugin 'git://github.com/othree/html5.vim.git'
Plugin 'git://github.com/hokaccha/vim-html5validator.git'
Plugin 'mattn/emmet-vim'

"Jade/Pug
Plugin 'git://github.com/digitaltoad/vim-pug.git'

"HAML
Plugin 'git://github.com/tpope/vim-haml.git'

"Mustache/Handlebars
Plugin 'mustache/vim-mustache-handlebars'

"Markdown
Plugin 'tpope/vim-markdown'
Plugin 'nelstrom/vim-markdown-folding'

"Textile
Plugin 'timcharper/textile.vim'

"
"		CSS
"
Plugin 'hail2u/vim-css3-syntax'
Plugin 'skammer/vim-css-color'
" LESS
Plugin 'groenewege/vim-less' 

"SASS/SCSS
Plugin 'cakebaker/scss-syntax.vim'

"   
"		JavaScript
"
" Vastly improved vim's javascript indentation
Plugin 'git://github.com/pangloss/vim-javascript.git'
Plugin 'jelera/vim-javascript-syntax'
Plugin 'slim-template/vim-slim.git'
Plugin 'mxw/vim-jsx'


" Syntax for jQuery keywords and css selectors
Plugin 'git://github.com/itspriddle/vim-jquery.git'
			
" CoffeeScript support
Plugin 'git://github.com/kchmck/vim-coffee-script.git'
Plugin 'git://github.com/walm/jshint.vim.git'

" Unit Testing tools
Bundle 'glanotte/vim-jasmine'
"Plug 'janko-m/vim-test'

" JSON
Plugin 'leshill/vim-json'

" Show defines
Bundle 'ternjs/tern_for_vim'

"
"		PHP
"
" Plugin 'git://github.com/vim-scripts/php.vim--Garvin.git'
Plugin '2072/PHP-Indenting-for-VIm'

" Python/Django
Bundle 'git://github.com/fs111/pydoc.vim.git'


" All of your Plugins must be added before the following line
 call vundle#end()            " required
 filetype plugin indent on    " required

 " " To ignore plugin indent changes, instead use:
 " "filetype plugin on
 " "
 " " Brief help
 " " :PluginList       - lists configured plugins
 " " :PluginInstall    - installs plugins; append `!` to update or just
 " :PluginUpdate
 " " :PluginSearch foo - searches for foo; append `!` to refresh local cache
 " " :PluginClean      - confirms removal of unused plugins; append `!` to
 " auto-approve removal
 " "
 " " see :h vundle for more details or wiki for FAQ
 " " Put your non-Plugin stuff after this line

 "Synstatic settings
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_pug_checkers = ['pug_lint']

"Set Russian Language CTRL + ^
set keymap=russian-jcukenwin
set iminsert=0
set imsearch=0

" Set spell
set spell spelllang=en_us,ru_ru

"Show line's numbers
set nu
 
" Folding by indention
set foldmethod=indent
" or syntax
" set foldmethod=syntax

" Highlight after find and syntax
set hls
set incsearch
syntax on

" Autoroll when closest to screen border
set scrolljump=5
set scrolloff=5

" Parameters for indention

" Turn on autoindent
set autoindent
set smartindent

" Tab sizing
set shiftwidth=4
set softtabstop=4
set tabstop=4

"Tab as space
"set expandtab

"Turn on Syntax and Omni-complete by syntax
syntax enable
set omnifunc=syntaxcomplete#Complete
" Omni-complete for CSS
autocmd FileType css set omnifunc=csscomplete#CompleteCSS
autocmd FileType less set omnifunc=csscomplete#CompleteCSS

"Finding files
"" Search down into sub folders
" Provides tab-completion for all file-related tasks
set path+=**

" Display all matching files when we tab complete
set wildmenu

"Ctags settings
set tags+=tags,./tags,../tags
set tags+=.tags,./.tags,../.tags,$HOME
