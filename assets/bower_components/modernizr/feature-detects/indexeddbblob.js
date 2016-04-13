/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(A,e,w){A.addAsyncTest(function(){var t,n,D,i="detect-blob-support",d=!1;try{t=w("indexedDB",window)}catch(o){}if(!A.indexeddb||!A.indexeddb.deletedatabase)return!1;try{t.deleteDatabase(i).onsuccess=function(){n=t.open(i,1),n.onupgradeneeded=function(){n.result.createObjectStore("store")},n.onsuccess=function(){D=n.result;try{D.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),d=!0}catch(A){d=!1}finally{e("indexeddbblob",d),D.close(),t.deleteDatabase(i)}}}}catch(o){e("indexeddbblob",!1)}})});