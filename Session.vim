let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Code/wordplay4lyfe-next
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +21 src/components/Products/Swatch.tsx
badd +11 ~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx
badd +0 src/static/collections/creative/index.ts
badd +0 src/static/collections/lifestyle/index.ts
badd +0 src/static/collections/mindset/index.ts
badd +0 src/static/collections/staff/index.ts
badd +0 src/static/collections/summer/index.ts
argglobal
%argdel
$argadd src/static/collections/creative/index.ts
$argadd src/static/collections/lifestyle/index.ts
$argadd src/static/collections/mindset/index.ts
$argadd src/static/collections/staff/index.ts
$argadd src/static/collections/summer/index.ts
edit ~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx
argglobal
if bufexists(fnamemodify("~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx", ":p")) | buffer ~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx | else | edit ~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx | endif
if &buftype ==# 'terminal'
  silent file ~/Code/wordplay4lyfe-next/src/components/Products/ProductBase.tsx
endif
balt src/components/Products/Swatch.tsx
setlocal fdm=manual
setlocal fde=
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 17 - ((11 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 0
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
