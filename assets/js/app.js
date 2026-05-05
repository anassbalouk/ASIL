// ─── I18N TRANSLATIONS ────────────────────────────────────
const TRANSLATIONS = {
    fr: {
        appName: 'ASIL CAISSE',
        appSub: 'Logiciel de Caisse Professionnel',
        pwPlaceholder: 'Mot de passe',
        loginBtn: 'Se connecter',
        pwWrong: 'Mot de passe incorrect',
        logoutConfirm: 'Voulez-vous vous deconnecter ?',
        pwBtn: 'Mot de passe',
        logout: 'Deconnexion',
        navMain: 'Principal',
        navPos: 'Point de Vente',
        navReturns: 'Retours',
        navManage: 'Gestion',
        navInventory: 'Inventaire',
        navProducts: 'Produits',
        navClients: 'Clients',
        navSuppliers: 'Fournisseurs',
        navReports: 'Rapports',
        navSalesHistory: 'Historique Ventes',
        navStats: 'Statistiques',
        searchProduct: 'Rechercher un produit',
        search: 'Rechercher',
        cart: 'Panier',
        articles: 'article(s)',
        selectClient: 'Sans client',
        subtotal: 'Sous-total',
        discount: 'Remise',
        total: 'TOTAL',
        cash: 'Especes',
        credit: 'Credit',
        amountReceived: 'Montant recu',
        change: 'MONNAIE',
        creditWarning: 'Paiement a credit: client requis',
        validateSale: 'Valider la vente',
        print: 'Imprimer',
        clearCart: 'Vider',
        returnsTitle: 'Gestion des Retours',
        invoiceNum: 'N° Facture',
        product: 'Produit',
        selectOption: 'Selectionner',
        qty: 'Quantite',
        reason: 'Motif',
        returnReason: 'Raison du retour',
        refundAmount: 'MONTANT REMBOURSE',
        saveReturn: 'Enregistrer le retour',
        totalProducts: 'Total produits',
        lowStock: 'Stock faible',
        outStock: 'Rupture',
        stockValue: 'Valeur du stock',
        stockStatus: 'Etat du stock',
        productList: 'Liste des produits',
        newProduct: 'Nouveau produit',
        photo: 'Photo',
        code: 'Code',
        name: 'Nom',
        price: 'Prix',
        stock: 'Stock',
        unit: 'Unité',
        actions: 'Actions',
        newClient: 'Nouveau client',
        phone: 'Telephone',
        address: 'Adresse',
        newSupplier: 'Nouveau fournisseur',
        salesHistory: 'Historique des Ventes',
        protectedAccess: 'Accès Protégé',
        enterPwHistory: 'Entrez le mot de passe pour acceder a l\'historique',
        unlock: 'Deverrouiller',
        date: 'Date',
        payment: 'Paiement',
        todayCA: 'CA du jour',
        creditSales: 'Ventes a credit',
        netCA: 'CA net',
        monthSales: 'Total des ventes (mois)',
        topProducts: 'Top Produits Vendus',
        changePassword: 'Changer le mot de passe',
        current: 'Actuel',
        newPw: 'Nouveau',
        confirm: 'Confirmer',
        changePwBtn: 'Changer',
        cancel: 'Annuler',
        save: 'Enregistrer',
        salePrice: 'Prix de vente (DH) *',
        initialStock: 'Stock initial *',
        minStock: 'Stock minimum (alerte)',
        clickAddPhoto: 'Cliquer pour ajouter une photo',
        tabTitles: {
            pos: 'Point de Vente',
            retours: 'Retours',
            inventaire: 'Inventaire',
            produits: 'Produits',
            clients: 'Clients',
            fournisseurs: 'Fournisseurs',
            ventes: 'Historique Ventes',
            stats: 'Statistiques'
        },
        alertSaved: 'Enregistre',
        alertDeleted: 'Supprime',
        alertPwChanged: 'Mot de passe modifie',
        alertNamePhoneRequired: 'Nom et telephone requis',
        alertOutOfStock: 'Stock epuise',
        alertInsufficientStock: 'Stock insuffisant',
        alertAdded: 'ajoute',
        alertPwIncorrect: 'Mot de passe incorrect',
        alertPwMismatch: 'Les mots de passe ne correspondent pas',
        alertPwMinLength: 'Minimum 4 caracteres',
        alertVoiceNotSupported: 'Reconnaissance vocale non prise en charge',
        alertCartEmpty: 'Panier vide',
        alertClientRequired: 'Client requis pour le credit',
        confirmDelete: 'Supprimer ?',
        noProductFound: 'Aucun produit trouvé',
        selectProducts: 'Selectionnez des produits',
        soldUnits: 'vendus',
        noSalesRegistered: 'Aucune vente enregistree',
        returnSaved: 'Retour enregistre',
        codeRequired: 'Code et nom requis',
        pwCurrentWrong: 'Mot de passe actuel incorrect',
        lang: 'fr-FR',
        payMode: 'Mode de paiement préféré',
        payAny: 'Tous',
        returnsHistory: 'Historique Retours',
        all: 'Tous',
        defaultPwLabel: 'Mot de passe par defaut :',
        achatNewOrder: 'Nouveau Bon Achat',
        achatOrderRefLabel: 'N° de Bon',
        editableLabel: '(modifiable)',
        supplierLabel: 'Fournisseur',
        addProduct: 'Ajouter un produit',
        productRefName: 'Produit (Ref. ou Nom)',
        unitPriceDh: 'Prix Unit. DH',
        totalPurchases: 'TOTAL ACHATS',
        saveUpper: 'ENREGISTRER',
        purchaseSlip: 'BON D\'ACHAT',
        purchaseHistory: 'Historique Achats'
    },
    en: {
        appName: 'ASIL CAISSE',
        appSub: 'Professional Point of Sale',
        pwPlaceholder: 'Password',
        loginBtn: 'Sign In',
        pwWrong: 'Incorrect password',
        logoutConfirm: 'Do you want to sign out?',
        pwBtn: 'Password',
        logout: 'Sign Out',
        navMain: 'Main',
        navPos: 'Point of Sale',
        navReturns: 'Returns',
        navManage: 'Management',
        navInventory: 'Inventory',
        navProducts: 'Products',
        navClients: 'Customers',
        navSuppliers: 'Suppliers',
        navReports: 'Reports',
        navSalesHistory: 'Sales History',
        navStats: 'Statistics',
        searchProduct: 'Search product',
        search: 'Search',
        cart: 'Cart',
        articles: 'item(s)',
        selectClient: 'No customer',
        subtotal: 'Subtotal',
        discount: 'Discount',
        total: 'TOTAL',
        cash: 'Cash',
        credit: 'Credit',
        amountReceived: 'Amount received',
        change: 'CHANGE',
        creditWarning: 'Credit payment: customer required',
        validateSale: 'Confirm Sale',
        print: 'Print',
        clearCart: 'Clear',
        returnsTitle: 'Returns Management',
        invoiceNum: 'Invoice No.',
        product: 'Product',
        selectOption: 'Select',
        qty: 'Quantity',
        reason: 'Reason',
        returnReason: 'Return reason',
        refundAmount: 'REFUND AMOUNT',
        saveReturn: 'Save Return',
        totalProducts: 'Total Products',
        lowStock: 'Low Stock',
        outStock: 'Out of Stock',
        stockValue: 'Stock Value',
        stockStatus: 'Stock Status',
        productList: 'Product List',
        newProduct: 'New Product',
        photo: 'Photo',
        code: 'Code',
        name: 'Name',
        price: 'Price',
        stock: 'Stock',
        unit: 'Unit',
        actions: 'Actions',
        newClient: 'New Customer',
        phone: 'Phone',
        address: 'Address',
        newSupplier: 'New Supplier',
        salesHistory: 'Sales History',
        protectedAccess: 'Protected Access',
        enterPwHistory: 'Enter password to access history',
        unlock: 'Unlock',
        date: 'Date',
        payment: 'Payment',
        todayCA: 'Today\'s Revenue',
        creditSales: 'Credit Sales',
        netCA: 'Net Revenue',
        monthSales: 'Monthly Sales',
        topProducts: 'Top Selling Products',
        changePassword: 'Change Password',
        current: 'Current',
        newPw: 'New',
        confirm: 'Confirm',
        changePwBtn: 'Change',
        cancel: 'Cancel',
        save: 'Save',
        salePrice: 'Sale Price (DH) *',
        initialStock: 'Initial Stock *',
        minStock: 'Minimum Stock (alert)',
        clickAddPhoto: 'Click to add a photo',
        tabTitles: {
            pos: 'Point of Sale',
            retours: 'Returns',
            inventaire: 'Inventory',
            produits: 'Products',
            clients: 'Customers',
            fournisseurs: 'Suppliers',
            ventes: 'Sales History',
            stats: 'Statistics'
        },
        alertSaved: 'Saved',
        alertDeleted: 'Deleted',
        alertPwChanged: 'Password changed',
        alertNamePhoneRequired: 'Name and phone are required',
        alertOutOfStock: 'Out of stock',
        alertInsufficientStock: 'Insufficient stock',
        alertAdded: 'added',
        alertPwIncorrect: 'Incorrect password',
        alertPwMismatch: 'Passwords do not match',
        alertPwMinLength: 'Minimum 4 characters',
        alertVoiceNotSupported: 'Voice recognition is not supported',
        alertCartEmpty: 'Cart is empty',
        alertClientRequired: 'Customer required for credit',
        confirmDelete: 'Delete?',
        noProductFound: 'No product found',
        selectProducts: 'Select products',
        soldUnits: 'sold',
        noSalesRegistered: 'No sales recorded',
        returnSaved: 'Return saved',
        codeRequired: 'Code and name are required',
        pwCurrentWrong: 'Current password is incorrect',
        lang: 'en-US',
        payMode: 'Preferred payment mode',
        payAny: 'Any',
        returnsHistory: 'Returns History',
        all: 'All',
        defaultPwLabel: 'Default password:',
        achatNewOrder: 'New Purchase Order',
        achatOrderRefLabel: 'Order No.',
        editableLabel: '(editable)',
        supplierLabel: 'Supplier',
        addProduct: 'Add product',
        productRefName: 'Product (Ref. or Name)',
        unitPriceDh: 'Unit Price DH',
        totalPurchases: 'TOTAL PURCHASES',
        saveUpper: 'SAVE',
        purchaseSlip: 'PURCHASE SLIP',
        purchaseHistory: 'Purchase History'
    },
    ar: {
        appName: 'ASIL CAISSE',
        appSub: 'نظام احترافي لنقطة البيع',
        pwPlaceholder: 'كلمة المرور',
        loginBtn: 'تسجيل الدخول',
        pwWrong: 'كلمة المرور غير صحيحة',
        logoutConfirm: 'هل تريد تسجيل الخروج؟',
        pwBtn: 'كلمة المرور',
        logout: 'تسجيل الخروج',
        navMain: 'الرئيسية',
        navPos: 'نقطة البيع',
        navReturns: 'المرتجعات',
        navManage: 'الإدارة',
        navInventory: 'المخزون',
        navProducts: 'المنتجات',
        navClients: 'العملاء',
        navSuppliers: 'الموردون',
        navReports: 'التقارير',
        navSalesHistory: 'سجل المبيعات',
        navStats: 'الإحصائيات',
        searchProduct: 'ابحث عن منتج',
        search: 'بحث',
        cart: 'السلة',
        articles: 'عنصر',
        selectClient: 'بدون عميل',
        subtotal: 'المجموع الجزئي',
        discount: 'الخصم',
        total: 'الإجمالي',
        cash: 'نقدا',
        credit: 'اجل',
        amountReceived: 'المبلغ المستلم',
        change: 'الباقي',
        creditWarning: 'الدفع الاجل يتطلب عميلا',
        validateSale: 'تأكيد البيع',
        print: 'طباعة',
        clearCart: 'افراغ',
        returnsTitle: 'إدارة المرتجعات',
        invoiceNum: 'رقم الفاتورة',
        product: 'المنتج',
        selectOption: 'اختر',
        qty: 'الكمية',
        reason: 'السبب',
        returnReason: 'سبب الارجاع',
        refundAmount: 'مبلغ الاسترداد',
        saveReturn: 'حفظ المرتجع',
        totalProducts: 'إجمالي المنتجات',
        lowStock: 'مخزون منخفض',
        outStock: 'نفد المخزون',
        stockValue: 'قيمة المخزون',
        stockStatus: 'حالة المخزون',
        productList: 'قائمة المنتجات',
        newProduct: 'منتج جديد',
        photo: 'صورة',
        code: 'الرمز',
        name: 'الاسم',
        price: 'السعر',
        stock: 'المخزون',
        unit: 'الوحدة',
        actions: 'الإجراءات',
        newClient: 'عميل جديد',
        phone: 'الهاتف',
        address: 'العنوان',
        newSupplier: 'مورد جديد',
        salesHistory: 'سجل المبيعات',
        protectedAccess: 'وصول محمي',
        enterPwHistory: 'أدخل كلمة المرور للوصول إلى السجل',
        unlock: 'فتح',
        date: 'التاريخ',
        payment: 'الدفع',
        todayCA: 'ايرادات اليوم',
        creditSales: 'المبيعات الاجلة',
        netCA: 'الايراد الصافي',
        monthSales: 'مبيعات الشهر',
        topProducts: 'أكثر المنتجات مبيعاً',
        changePassword: 'تغيير كلمة المرور',
        current: 'الحالية',
        newPw: 'الجديدة',
        confirm: 'تأكيد',
        changePwBtn: 'تغيير',
        cancel: 'الغاء',
        save: 'حفظ',
        salePrice: 'سعر البيع (DH) *',
        initialStock: 'المخزون الاولي *',
        minStock: 'الحد الأدنى للمخزون',
        clickAddPhoto: 'انقر لإضافة صورة',
        tabTitles: {
            pos: 'نقطة البيع',
            retours: 'المرتجعات',
            inventaire: 'المخزون',
            produits: 'المنتجات',
            clients: 'العملاء',
            fournisseurs: 'الموردون',
            ventes: 'سجل المبيعات',
            stats: 'الاحصائيات'
        },
        alertSaved: 'تم الحفظ',
        alertDeleted: 'تم الحذف',
        alertPwChanged: 'تم تغيير كلمة المرور',
        alertNamePhoneRequired: 'الاسم والهاتف مطلوبان',
        alertOutOfStock: 'نفد المخزون',
        alertInsufficientStock: 'المخزون غير كاف',
        alertAdded: 'تمت الاضافة',
        alertPwIncorrect: 'كلمة المرور غير صحيحة',
        alertPwMismatch: 'كلمتا المرور غير متطابقتين',
        alertPwMinLength: 'الحد الادنى 4 احرف',
        alertVoiceNotSupported: 'البحث الصوتي غير مدعوم',
        alertCartEmpty: 'السلة فارغة',
        alertClientRequired: 'العميل مطلوب للدفع الاجل',
        confirmDelete: 'حذف؟',
        noProductFound: 'لم يتم العثور على منتج',
        selectProducts: 'اختر المنتجات',
        soldUnits: 'مباع',
        noSalesRegistered: 'لا توجد مبيعات مسجلة',
        returnSaved: 'تم حفظ المرتجع',
        codeRequired: 'الرمز والاسم مطلوبان',
        pwCurrentWrong: 'كلمة المرور الحالية غير صحيحة',
        lang: 'ar-MA',
        payMode: 'طريقة الدفع المفضلة',
        payAny: 'الكل',
        returnsHistory: 'سجل المرتجعات',
        all: 'الكل',
        defaultPwLabel: 'كلمة المرور الافتراضية:',
        achatNewOrder: 'طلب شراء جديد',
        achatOrderRefLabel: 'رقم السند',
        editableLabel: '(قابل للتعديل)',
        supplierLabel: 'المورد',
        addProduct: 'اضافة منتج',
        productRefName: 'المنتج (المرجع او الاسم)',
        unitPriceDh: 'سعر الوحدة DH',
        totalPurchases: 'اجمالي المشتريات',
        saveUpper: 'حفظ',
        purchaseSlip: 'سند الشراء',
        purchaseHistory: 'سجل المشتريات'
    }
};

let currentLang = localStorage.getItem('asil_lang') || 'fr';

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['fr'][key] || key;
}

const MANUAL_UI_TEXT = {
    fr: {
        navDashboard: 'Tableau de Bord',
        navCalculator: 'Calculatrice',
        navAchat: 'Point d\'Achat',
        navSettings: 'Parametres',
        dashboardWelcome: 'Bienvenue sur ASIL CAISSE',
        dashboardDateFallback: 'Date du jour',
        dashReturnPoint: 'Point de Retour',
        dashDeliveryPoint: 'Point de Livraison',
        dashSalesPoint: 'Point de Vente',
        dashPurchasePoint: 'Point d\'Achat',
        dashSalesSub: 'Ventes & encaissements',
        dashPurchaseSub: 'Bons d\'achat fournisseurs',
        dashReturnSub: 'Gestion des retours',
        dashDeliverySub: 'Stock & inventaire',
        dashCaToday: 'CA Aujourd\'hui',
        dashProducts: 'Produits',
        dashClients: 'Clients',
        dashOutStock: 'Ruptures Stock',
        viewStats: 'Voir Statistiques',
        viewInventory: 'Voir Inventaire',
        viewClients: 'Voir Clients',
        searchExistingClient: 'Rechercher client existant...',
        freeClientName: 'Nom client (libre)',
        cheque: 'Cheque',
        transfer: 'Virement',
        creditHint: 'Credit - entrez le nom du client (existant ou libre)',
        printShort: 'Imprimer',
        clearShort: 'Vider',
        returnsTitleShort: 'Gestion des Retours',
        cancelShort: 'Annuler',
        returnsHistory: 'Historique Retours',
        searchPlaceholder: 'Rechercher...',
        addProductShort: 'Ajouter le produit',
        saveShort: 'Enregistrer',
        returnSlip: 'Bon de retour',
        noProductAdded: 'Aucun produit ajoute',
        noReturns: 'Aucun retour',
        noPurchases: 'Aucun achat',
        noClientFound: 'Aucun client trouve',
        noClientShort: 'Sans client',
        addClientFromSearch: 'Ajouter "{name}" comme nouveau client',
        stockAlert: 'Rupture de stock',
        statsProtectedAccess: 'Acces Protege',
        statsEnterPw: 'Entrez le mot de passe pour voir les statistiques',
        paramsProtectedAccess: 'Acces Protege',
        paramsEnterPw: 'Entrez le mot de passe pour acceder aux Parametres',
        unlockShort: 'Deverrouiller',
        retHeaderNo: 'N°',
        retHeaderDate: 'Date',
        retHeaderClient: 'Client',
        retHeaderProducts: 'Produits',
        retHeaderTotal: 'Total',
        retHeaderSlip: 'Bon',
        achatHeaderNo: 'N° Bon',
        achatHeaderDate: 'Date',
        achatHeaderSupplier: 'Fournisseur',
        achatHeaderTotal: 'Total',
        achatHeaderSlip: 'Bon',
        dashboardTitle: 'Tableau de Bord',
        greetMorning: 'Bonjour',
        greetAfternoon: 'Bon apres-midi',
        greetEvening: 'Bonsoir',
        phonePlaceholder: 'Telephone',
        qtyPlaceholder: 'Quantite',
        unitPricePlaceholder: 'Prix unitaire',
        returnDateLabel: 'Date du retour',
        returnClientLabel: 'Client',
        returnClientPlaceholder: 'Nom du client...',
        returnTypeLabel: 'Type d\'operation :',
        returnSaleOption: 'Retour de vente',
        returnPurchaseOption: 'Retour d\'achat',
        returnProductLabel: 'Produit (nom ou ref.)',
        returnProductPlaceholder: 'Nom ou reference...',
        returnUnitSaleLabel: 'Prix unitaire de vente (DH)',
        returnSalePlaceholder: 'Prix de vente...',
        refundTotalLabel: 'TOTAL REMBOURSE',
        salesColLabel: 'Designation',
        salesColQty: 'Qte',
        salesColUnit: 'P.U.',
        salesColDisc: 'Rem.',
        salesColTotal: 'Total',
        clientSearchPlaceholder: 'Rechercher un client...',
        supplierSearchPlaceholder: 'Rechercher un fournisseur...',
        newClientBtn: 'Nouveau Client',
        newSupplierBtn: 'Nouveau Fournisseur',
        deleteAllBtn: 'Tout supprimer',
        clientsTotalClients: 'Total Clients',
        clientsTotalCredit: 'Total Credit',
        clientsTotalSales: 'Total Ventes',
        clientsTotalPayments: 'Total Paiements',
        suppliersTotalSuppliers: 'Total Fournisseurs',
        suppliersTotalDue: 'Total Du',
        suppliersTotalPurchases: 'Total Achats',
        suppliersTotalPaid: 'Total Paye',
        noSupplierFound: 'Aucun fournisseur trouve',
        clientFile: 'Dossier Client',
        supplierFile: 'Dossier Fournisseur',
        noPayments: 'Aucun paiement',
        noCreditSales: 'Aucune vente a credit',
        clientsHeadClient: 'Client',
        clientsHeadCode: 'Code Client',
        clientsHeadPhone: 'Telephone',
        clientsHeadAddress: 'Adresse',
        clientsHeadSales: 'Total Ventes',
        clientsHeadPayments: 'Total Paiements',
        clientsHeadReturns: 'Total Retours',
        clientsHeadCredit: 'Credit (Reste a payer)',
        clientsHeadNote: 'Remarque',
        clientsHeadActions: 'Actions',
        suppliersHeadSupplier: 'Fournisseur',
        suppliersHeadPhone: 'Telephone',
        suppliersHeadAddress: 'Adresse',
        suppliersHeadPurchases: 'Total Achats',
        suppliersHeadPayments: 'Total Paiements',
        suppliersHeadDue: 'Montant Du',
        suppliersHeadNote: 'Remarque',
        suppliersHeadActions: 'Actions',
        salesHeadInvoice: 'N° Fact.',
        salesHeadDate: 'Date',
        salesHeadClient: 'Client',
        salesHeadProducts: 'Produits',
        salesHeadTotal: 'Total',
        salesHeadPayment: 'Paiement',
        salesHeadSlip: 'Bon',
        salesQuickActionsTitle: 'Actions rapides',
        salesDeleteBtn: 'Effacer historique',
        salesRecoverBtn: 'Recuperer historique',
        salesRecoverCount: '{count} lignes recuperables (sans limite de duree)',
        returnsQuickActionsTitle: 'Actions rapides',
        returnsDeleteBtn: 'Effacer historique retours',
        returnsRecoverBtn: 'Recuperer historique retours',
        returnsRecoverCount: '{count} lignes recuperables (sans limite de duree)',
        selectAllShort: 'Tout selectionner',
        deleteSelectedBtn: 'Supprimer selection',
        recoverSelectedBtn: 'Recuperer selection',
        deletePermanentlyBtn: 'Supprimer definitivement',
        deletePermanentlySelectedBtn: 'Supprimer def. selection',
        deletePermanentlyAllBtn: 'Tout supprimer def.',
        salesDeletedTitle: 'Ventes supprimees',
        returnsDeletedTitle: 'Retours supprimes',
        noDeletedSales: 'Aucune vente supprimee',
        noDeletedReturns: 'Aucun retour supprime',
        selectOneLineAlert: 'Selectionnez au moins une ligne',
        deleteSelectedSalesConfirm: 'Supprimer les ventes selectionnees ? (Recuperable)',
        deleteSelectedReturnsConfirm: 'Supprimer les retours selectionnes ? (Recuperable)',
        recoverSelectedSalesConfirm: 'Recuperer les ventes selectionnees ?',
        recoverSelectedReturnsConfirm: 'Recuperer les retours selectionnes ?',
        deletePermanentlyOneSalesConfirm: 'Supprimer definitivement cette vente ? Action irreversible.',
        deletePermanentlyOneReturnConfirm: 'Supprimer definitivement ce retour ? Action irreversible.',
        deletePermanentlySelectedSalesConfirm: 'Supprimer definitivement les ventes selectionnees ? Action irreversible.',
        deletePermanentlySelectedReturnsConfirm: 'Supprimer definitivement les retours selectionnes ? Action irreversible.',
        deletePermanentlyAllSalesConfirm: 'Supprimer definitivement toutes les ventes supprimees ? Action irreversible.',
        deletePermanentlyAllReturnsConfirm: 'Supprimer definitivement tous les retours supprimes ? Action irreversible.',
        deletePermanentlySuccess: 'Suppression definitive effectuee',
        retQtyLabel: 'Quantite',
        achatSupplierPlaceholder: 'Nom fournisseur...',
        achatProdSearchPlaceholder: 'Recherche...',
        clientPaymentTitle: 'Enregistrer un paiement :',
        supplierPaymentTitle: 'Enregistrer un paiement :',
        validatePaymentBtn: 'Valider Paiement',
        clientSlipSalesBtn: 'Bon Ventes',
        clientSlipPaymentsBtn: 'Bon Paiements',
        clientSlipReturnsBtn: 'Bon Retours',
        supplierSlipPurchasesBtn: 'Bon Achats',
        supplierSlipPaymentsBtn: 'Bon Paiements',
        supplierSlipReturnsBtn: 'Bon Retours',
        supplierReturnRegisterTitle: 'Enregistrer un retour :',
        supplierReturnNotePlaceholder: 'Reference / motif',
        statsPeriodTitle: 'Benefices sur periode :',
        statsFromLabel: 'Debut',
        statsToLabel: 'Fin',
        retAddProductTitle: 'Ajouter un produit',
        detailClose: 'Fermer',
        amountDhPlaceholder: 'Montant DH',
        noteOptionalPlaceholder: 'Remarque (optionnel)',
        clientSalesCreditTitle: 'Ventes a Credit',
        clientPaymentsTitle: 'Paiements',
        clientReturnsTitle: 'Retours',
        supplierPurchasesTitle: 'Achats',
        supplierPaymentsTitle: 'Paiements',
        supplierReturnsTitle: 'Retours Fournisseur',
        validateShort: 'Valider',
        thDate: 'Date',
        thReference: 'Reference',
        thAmount: 'Montant',
        thNote: 'Remarque',
        thReturnedProducts: 'Produits Retournes',
        statsCaTodayLabel: 'CA Aujourd hui',
        statsCaTodaySub: 'Total de toutes les ventes du jour',
        statsClientPaymentsLabel: 'Reglements Clients (auj.)',
        statsClientPaymentsSub: 'Paiements recus aujourd hui',
        statsCreditSalesTodayLabel: 'Ventes a Credit (auj.)',
        statsCreditSalesTodaySub: 'Factures mode credit',
        statsNetLabel: 'CA NET',
        statsNetSub: 'CA + Reglements - Credit - Retours',
        statsMonthSalesLabel: 'Total Ventes (mois)',
        statsMonthPurchasesLabel: 'Total Achats (mois)',
        statsMonthProfitLabel: 'Benefice (mois)',
        statsMonthProfitSub: 'Ventes - Achats',
        statsTopProductsTitle: 'Top Produits Vendus',
        cdStatSalesLabel: 'Total Ventes (Credit)',
        cdStatPaymentsLabel: 'Total Paiements',
        cdStatReturnsLabel: 'Total Retours',
        cdStatCreditLabel: 'Credit Actuel',
        sdStatPurchasesLabel: 'Total Achats',
        sdStatPaymentsLabel: 'Total Paiements',
        sdStatReturnsLabel: 'Total Retours',
        sdStatDueLabel: 'Montant Du',
        paramLangTitle: 'Langue des Bons & Tickets',
        paramLangHint: 'La langue selectionnee s\'applique a tous les bons et tickets imprimes (Facture, Bon d\'achat, Bon de retour).',
        paramLangFrLabel: 'Français',
        paramLangEnLabel: 'English',
        paramLangArLabel: 'Arabe',
        paramLangFrBtn: '🇫🇷 Français',
        paramLangEnBtn: '🇬🇧 English',
        paramLangArBtn: '🇸🇦 Arabe',
        paramThemeTitle: 'Couleurs & Theme',
        paramThemeMorning: 'Matin',
        paramThemeEvening: 'Soir',
        paramThemePalettes: 'Palettes predefinies :',
        paramThemeCustomColor: 'Couleur personnalisee',
        paramThemeReset: 'Defaut',
        paramThemePresetGreenDefault: 'Vert (defaut)',
        paramThemePresetBlue: 'Bleu',
        paramThemePresetRed: 'Rouge',
        paramThemePresetPurple: 'Violet',
        paramThemePresetOrange: 'Orange',
        paramThemePresetTeal: 'Teal',
        paramThemePresetIndigo: 'Indigo',
        paramThemePresetDarkGray: 'Gris fonce',
        paramCompanyTitle: 'Informations Societe',
        paramCompanyNameLabel: 'Nom de la societe',
        paramCompanyAddrLabel: 'Adresse',
        paramCompanyTelLabel: 'Telephone',
        paramCompanySaveBtn: 'Enregistrer',
        paramCompanyAddrPh: 'Adresse...',
        paramLogoTitle: 'Logo & Image Societe',
        paramLogoClickLabel: 'Cliquer pour ajouter le logo',
        paramLogoFormatLabel: 'PNG, JPG, SVG - max 2 MB',
        paramLogoChooseBtn: 'Choisir image',
        paramLogoNote: 'Apparait sur tous les bons, tickets et factures imprimes.',
        paramTicketPreviewTitle: 'Apercu du Ticket',
        paramTicketSampleProduct1: 'Produit exemple',
        paramTicketSampleProduct2: 'Autre produit',
        paramTicketPreviewRefreshBtn: 'Actualiser l\'apercu',
        paramSignatureTitle: 'Signature',
        paramSignatureSaveBtn: 'Sauvegarder',
        paramSignatureClearBtn: 'Effacer',
        paramPasswordTitle: 'Changer le Mot de Passe',
        paramPwCurLabel: 'Mot de passe actuel',
        paramPwNewLabel: 'Nouveau mot de passe',
        paramPwConfLabel: 'Confirmer le nouveau',
        paramPwCurPh: 'Actuel...',
        paramPwNewPh: 'Nouveau (min. 4 car.)...',
        paramPwConfPh: 'Confirmer...',
        paramPwUpdateBtn: 'Mettre a jour le mot de passe',
        paramSoundTitle: 'Sonnerie',
        paramSoundBeep: 'Bip classique',
        paramSoundDouble: 'Double bip',
        paramSoundMelody: 'Melodie',
        paramSoundSuccess: 'Validation',
        paramSoundWarn: 'Alerte',
        paramSoundDelete: 'Suppression',
        paramSoundMute: 'Muet',
        paramBackupTitle: 'Sauvegarde Hors Ligne',
        paramBackupHint: 'Les donnees sont stockees localement en mode hors ligne (IndexedDB). Exportez un fichier de secours regulierement.',
        paramBackupExportBtn: 'Exporter JSON',
        paramBackupImportBtn: 'Importer JSON',
        paramBackupSyncBtn: 'Synchroniser maintenant',
        paramTrashTitle: 'Corbeille',
        paramTrashHint: 'Les elements supprimes (clients, fournisseurs, produits) sont conserves ici et recuperables a tout moment.',
        paramTrashEmptyBtn: 'Vider la corbeille definitivement',
        paramEraseTitle: 'Effacement des Donnees par Zone',
        paramEraseWarning: 'Les donnees effacees restent recuperables a tout moment via le bouton "Recuperer".',
        paramEraseSalesTitle: 'Historique des ventes',
        paramEraseReturnsTitle: 'Historique des retours',
        paramErasePurchasesTitle: 'Achats du mois',
        paramEraseOpsTitle: 'Operations clients du mois',
        paramEraseBtn: 'Effacer',
        paramRecoverBtn: 'Recuperer',
        trashEmpty: 'Corbeille vide ✅',
        trashTypeClient: 'Client',
        trashTypeSupplier: 'Fournisseur',
        trashTypeProduct: 'Produit',
        trashDeletedOn: 'supprime le {date}',
        trashEmptyConfirm: 'Vider definitivement la corbeille ?',
        trashEmptiedAlert: 'Corbeille videe',
        trashRecoveredAlert: 'Element recupere',
        eraseCountSales: '{count} lignes dans l\'historique des ventes',
        eraseCountReturns: '{count} lignes dans l\'historique des retours',
        eraseCountPurchases: '{count} achats ce mois',
        eraseCountOperations: '{count} operations ce mois',
        eraseZoneSales: 'historique des ventes',
        eraseZoneReturns: 'historique des retours',
        eraseZonePurchases: 'achats',
        eraseZoneOperations: 'operations clients',
        eraseConfirm: 'Effacer les {zone} de ce mois ? (Recuperable)',
        eraseConfirmSalesHistory: 'Effacer tout l\'historique des ventes ? (Recuperable)',
        eraseConfirmReturnsHistory: 'Effacer tout l\'historique des retours ? (Recuperable)',
        eraseClearedAlert: 'Donnees effacees (recuperables)',
        eraseNoBackup: 'Aucune sauvegarde disponible a recuperer',
        eraseRecoverConfirm: 'Recuperer toutes les donnees effacees de cette zone ?',
        eraseRecoverSalesHistory: 'Recuperer tout l\'historique des ventes ?',
        eraseRecoverReturnsHistory: 'Recuperer tout l\'historique des retours ?',
        eraseRecoveredAlert: 'Donnees recuperees avec succes',
        syncLocalSaved: 'Sauvegarde locale synchronisee:',
        syncFileFailed: 'Synchronisation fichier echouee (serveur local indisponible)',
        syncFileOffline: 'Synchronisation fichier impossible (hors ligne)',
        syncSavedInFolder: 'Etat enregistre dans le dossier de l\'application:'
    },
    en: {
        navDashboard: 'Dashboard',
        navCalculator: 'Calculator',
        navAchat: 'Purchases',
        navSettings: 'Settings',
        dashboardWelcome: 'Welcome to ASIL CAISSE',
        dashboardDateFallback: 'Today',
        dashReturnPoint: 'Return Desk',
        dashDeliveryPoint: 'Delivery Desk',
        dashSalesPoint: 'Point of Sale',
        dashPurchasePoint: 'Purchases',
        dashSalesSub: 'Sales & checkout',
        dashPurchaseSub: 'Supplier purchase orders',
        dashReturnSub: 'Return management',
        dashDeliverySub: 'Stock & inventory',
        dashCaToday: 'Revenue Today',
        dashProducts: 'Products',
        dashClients: 'Customers',
        dashOutStock: 'Out of Stock',
        viewStats: 'View Statistics',
        viewInventory: 'View Inventory',
        viewClients: 'View Customers',
        searchExistingClient: 'Search existing customer...',
        freeClientName: 'Customer name (free)',
        cheque: 'Cheque',
        transfer: 'Bank Transfer',
        creditHint: 'Credit - enter customer name (existing or free)',
        printShort: 'Print',
        clearShort: 'Clear',
        returnsTitleShort: 'Returns Management',
        cancelShort: 'Cancel',
        returnsHistory: 'Returns History',
        searchPlaceholder: 'Search...',
        addProductShort: 'Add product',
        saveShort: 'Save',
        returnSlip: 'Return Slip',
        noProductAdded: 'No product added',
        noReturns: 'No returns',
        noPurchases: 'No purchases',
        noClientFound: 'No customer found',
        noClientShort: 'No customer',
        addClientFromSearch: 'Add "{name}" as a new customer',
        stockAlert: 'Out of stock',
        statsProtectedAccess: 'Protected Access',
        statsEnterPw: 'Enter password to view statistics',
        paramsProtectedAccess: 'Protected Access',
        paramsEnterPw: 'Enter password to access settings',
        unlockShort: 'Unlock',
        retHeaderNo: 'No.',
        retHeaderDate: 'Date',
        retHeaderClient: 'Customer',
        retHeaderProducts: 'Products',
        retHeaderTotal: 'Total',
        retHeaderSlip: 'Slip',
        achatHeaderNo: 'Order No.',
        achatHeaderDate: 'Date',
        achatHeaderSupplier: 'Supplier',
        achatHeaderTotal: 'Total',
        achatHeaderSlip: 'Slip',
        dashboardTitle: 'Dashboard',
        greetMorning: 'Good morning',
        greetAfternoon: 'Good afternoon',
        greetEvening: 'Good evening',
        phonePlaceholder: 'Phone',
        qtyPlaceholder: 'Quantity',
        unitPricePlaceholder: 'Unit price',
        returnDateLabel: 'Return date',
        returnClientLabel: 'Customer',
        returnClientPlaceholder: 'Customer name...',
        returnTypeLabel: 'Operation type:',
        returnSaleOption: 'Sales return',
        returnPurchaseOption: 'Purchase return',
        returnProductLabel: 'Product (name or ref.)',
        returnProductPlaceholder: 'Name or reference...',
        returnUnitSaleLabel: 'Unit sale price (DH)',
        returnSalePlaceholder: 'Sale price...',
        refundTotalLabel: 'TOTAL REFUNDED',
        salesColLabel: 'Description',
        salesColQty: 'Qty',
        salesColUnit: 'U.Price',
        salesColDisc: 'Disc.',
        salesColTotal: 'Total',
        clientSearchPlaceholder: 'Search customer...',
        supplierSearchPlaceholder: 'Search supplier...',
        newClientBtn: 'New Customer',
        newSupplierBtn: 'New Supplier',
        deleteAllBtn: 'Delete all',
        clientsTotalClients: 'Total Customers',
        clientsTotalCredit: 'Total Credit',
        clientsTotalSales: 'Total Sales',
        clientsTotalPayments: 'Total Payments',
        suppliersTotalSuppliers: 'Total Suppliers',
        suppliersTotalDue: 'Total Due',
        suppliersTotalPurchases: 'Total Purchases',
        suppliersTotalPaid: 'Total Paid',
        noSupplierFound: 'No supplier found',
        clientFile: 'Customer File',
        supplierFile: 'Supplier File',
        noPayments: 'No payment',
        noCreditSales: 'No credit sale',
        clientsHeadClient: 'Customer',
        clientsHeadCode: 'Customer Code',
        clientsHeadPhone: 'Phone',
        clientsHeadAddress: 'Address',
        clientsHeadSales: 'Total Sales',
        clientsHeadPayments: 'Total Payments',
        clientsHeadReturns: 'Total Returns',
        clientsHeadCredit: 'Credit (Balance Due)',
        clientsHeadNote: 'Note',
        clientsHeadActions: 'Actions',
        suppliersHeadSupplier: 'Supplier',
        suppliersHeadPhone: 'Phone',
        suppliersHeadAddress: 'Address',
        suppliersHeadPurchases: 'Total Purchases',
        suppliersHeadPayments: 'Total Payments',
        suppliersHeadDue: 'Amount Due',
        suppliersHeadNote: 'Note',
        suppliersHeadActions: 'Actions',
        salesHeadInvoice: 'Invoice No.',
        salesHeadDate: 'Date',
        salesHeadClient: 'Customer',
        salesHeadProducts: 'Products',
        salesHeadTotal: 'Total',
        salesHeadPayment: 'Payment',
        salesHeadSlip: 'Slip',
        salesQuickActionsTitle: 'Quick actions',
        salesDeleteBtn: 'Delete history',
        salesRecoverBtn: 'Recover history',
        salesRecoverCount: '{count} recoverable lines (no time limit)',
        returnsQuickActionsTitle: 'Quick actions',
        returnsDeleteBtn: 'Delete returns history',
        returnsRecoverBtn: 'Recover returns history',
        returnsRecoverCount: '{count} recoverable lines (no time limit)',
        selectAllShort: 'Select all',
        deleteSelectedBtn: 'Delete selected',
        recoverSelectedBtn: 'Recover selected',
        deletePermanentlyBtn: 'Delete permanently',
        deletePermanentlySelectedBtn: 'Permanent delete selected',
        deletePermanentlyAllBtn: 'Permanent delete all',
        salesDeletedTitle: 'Deleted sales',
        returnsDeletedTitle: 'Deleted returns',
        noDeletedSales: 'No deleted sales',
        noDeletedReturns: 'No deleted returns',
        selectOneLineAlert: 'Select at least one line',
        deleteSelectedSalesConfirm: 'Delete selected sales? (Recoverable)',
        deleteSelectedReturnsConfirm: 'Delete selected returns? (Recoverable)',
        recoverSelectedSalesConfirm: 'Recover selected sales?',
        recoverSelectedReturnsConfirm: 'Recover selected returns?',
        deletePermanentlyOneSalesConfirm: 'Permanently delete this sale? This action cannot be undone.',
        deletePermanentlyOneReturnConfirm: 'Permanently delete this return? This action cannot be undone.',
        deletePermanentlySelectedSalesConfirm: 'Permanently delete selected sales? This action cannot be undone.',
        deletePermanentlySelectedReturnsConfirm: 'Permanently delete selected returns? This action cannot be undone.',
        deletePermanentlyAllSalesConfirm: 'Permanently delete all deleted sales? This action cannot be undone.',
        deletePermanentlyAllReturnsConfirm: 'Permanently delete all deleted returns? This action cannot be undone.',
        deletePermanentlySuccess: 'Permanent deletion completed',
        retQtyLabel: 'Quantity',
        achatSupplierPlaceholder: 'Supplier name...',
        achatProdSearchPlaceholder: 'Search...',
        clientPaymentTitle: 'Record a payment:',
        supplierPaymentTitle: 'Record a payment:',
        validatePaymentBtn: 'Confirm Payment',
        clientSlipSalesBtn: 'Sales Slip',
        clientSlipPaymentsBtn: 'Payment Slip',
        clientSlipReturnsBtn: 'Return Slip',
        supplierSlipPurchasesBtn: 'Purchase Slip',
        supplierSlipPaymentsBtn: 'Payment Slip',
        supplierSlipReturnsBtn: 'Return Slip',
        supplierReturnRegisterTitle: 'Record a return:',
        supplierReturnNotePlaceholder: 'Reference / reason',
        statsPeriodTitle: 'Profit over period:',
        statsFromLabel: 'From',
        statsToLabel: 'To',
        retAddProductTitle: 'Add product',
        detailClose: 'Close',
        amountDhPlaceholder: 'Amount DH',
        noteOptionalPlaceholder: 'Note (optional)',
        clientSalesCreditTitle: 'Credit Sales',
        clientPaymentsTitle: 'Payments',
        clientReturnsTitle: 'Returns',
        supplierPurchasesTitle: 'Purchases',
        supplierPaymentsTitle: 'Payments',
        supplierReturnsTitle: 'Supplier Returns',
        validateShort: 'Confirm',
        thDate: 'Date',
        thReference: 'Reference',
        thAmount: 'Amount',
        thNote: 'Note',
        thReturnedProducts: 'Returned Products',
        statsCaTodayLabel: 'Revenue Today',
        statsCaTodaySub: 'Total of all sales for today',
        statsClientPaymentsLabel: 'Customer Payments (today)',
        statsClientPaymentsSub: 'Payments received today',
        statsCreditSalesTodayLabel: 'Credit Sales (today)',
        statsCreditSalesTodaySub: 'Invoices in credit mode',
        statsNetLabel: 'NET REVENUE',
        statsNetSub: 'Revenue + Payments - Credit - Returns',
        statsMonthSalesLabel: 'Total Sales (month)',
        statsMonthPurchasesLabel: 'Total Purchases (month)',
        statsMonthProfitLabel: 'Profit (month)',
        statsMonthProfitSub: 'Sales - Purchases',
        statsTopProductsTitle: 'Top Selling Products',
        cdStatSalesLabel: 'Total Sales (Credit)',
        cdStatPaymentsLabel: 'Total Payments',
        cdStatReturnsLabel: 'Total Returns',
        cdStatCreditLabel: 'Current Credit',
        sdStatPurchasesLabel: 'Total Purchases',
        sdStatPaymentsLabel: 'Total Payments',
        sdStatReturnsLabel: 'Total Returns',
        sdStatDueLabel: 'Amount Due',
        paramLangTitle: 'Receipt & Ticket Language',
        paramLangHint: 'The selected language applies to all printed slips and tickets (Invoice, Purchase Slip, Return Slip).',
        paramLangFrLabel: 'French',
        paramLangEnLabel: 'English',
        paramLangArLabel: 'Arabic',
        paramLangFrBtn: '🇫🇷 French',
        paramLangEnBtn: '🇬🇧 English',
        paramLangArBtn: '🇸🇦 Arabic',
        paramThemeTitle: 'Colors & Theme',
        paramThemeMorning: 'Morning',
        paramThemeEvening: 'Evening',
        paramThemePalettes: 'Preset palettes:',
        paramThemeCustomColor: 'Custom color',
        paramThemeReset: 'Default',
        paramThemePresetGreenDefault: 'Green (default)',
        paramThemePresetBlue: 'Blue',
        paramThemePresetRed: 'Red',
        paramThemePresetPurple: 'Purple',
        paramThemePresetOrange: 'Orange',
        paramThemePresetTeal: 'Teal',
        paramThemePresetIndigo: 'Indigo',
        paramThemePresetDarkGray: 'Dark gray',
        paramCompanyTitle: 'Company Information',
        paramCompanyNameLabel: 'Company name',
        paramCompanyAddrLabel: 'Address',
        paramCompanyTelLabel: 'Phone',
        paramCompanySaveBtn: 'Save',
        paramCompanyAddrPh: 'Address...',
        paramLogoTitle: 'Company Logo & Image',
        paramLogoClickLabel: 'Click to add the logo',
        paramLogoFormatLabel: 'PNG, JPG, SVG - max 2 MB',
        paramLogoChooseBtn: 'Choose image',
        paramLogoNote: 'Appears on all printed slips, tickets, and invoices.',
        paramTicketPreviewTitle: 'Ticket Preview',
        paramTicketSampleProduct1: 'Sample product',
        paramTicketSampleProduct2: 'Another product',
        paramTicketPreviewRefreshBtn: 'Refresh preview',
        paramSignatureTitle: 'Signature',
        paramSignatureSaveBtn: 'Save',
        paramSignatureClearBtn: 'Clear',
        paramPasswordTitle: 'Change Password',
        paramPwCurLabel: 'Current password',
        paramPwNewLabel: 'New password',
        paramPwConfLabel: 'Confirm new password',
        paramPwCurPh: 'Current...',
        paramPwNewPh: 'New (min. 4 chars)...',
        paramPwConfPh: 'Confirm...',
        paramPwUpdateBtn: 'Update password',
        paramSoundTitle: 'Sound',
        paramSoundBeep: 'Classic beep',
        paramSoundDouble: 'Double beep',
        paramSoundMelody: 'Melody',
        paramSoundSuccess: 'Validation',
        paramSoundWarn: 'Alert',
        paramSoundDelete: 'Delete',
        paramSoundMute: 'Mute',
        paramBackupTitle: 'Offline Backup',
        paramBackupHint: 'Data is stored locally in offline mode (IndexedDB). Export a backup file regularly.',
        paramBackupExportBtn: 'Export JSON',
        paramBackupImportBtn: 'Import JSON',
        paramBackupSyncBtn: 'Sync now',
        paramTrashTitle: 'Trash',
        paramTrashHint: 'Deleted items (customers, suppliers, products) are kept here and can be restored anytime.',
        paramTrashEmptyBtn: 'Empty trash permanently',
        paramEraseTitle: 'Delete Data by Section',
        paramEraseWarning: 'Deleted data stays recoverable anytime using the "Recover" button.',
        paramEraseSalesTitle: 'Sales history',
        paramEraseReturnsTitle: 'Returns history',
        paramErasePurchasesTitle: 'Monthly purchases',
        paramEraseOpsTitle: 'Monthly customer operations',
        paramEraseBtn: 'Delete',
        paramRecoverBtn: 'Recover',
        trashEmpty: 'Trash is empty ✅',
        trashTypeClient: 'Customer',
        trashTypeSupplier: 'Supplier',
        trashTypeProduct: 'Product',
        trashDeletedOn: 'deleted on {date}',
        trashEmptyConfirm: 'Empty trash permanently?',
        trashEmptiedAlert: 'Trash emptied',
        trashRecoveredAlert: 'Item recovered',
        eraseCountSales: '{count} sales lines in history',
        eraseCountReturns: '{count} return lines in history',
        eraseCountPurchases: '{count} purchases this month',
        eraseCountOperations: '{count} operations this month',
        eraseZoneSales: 'sales history',
        eraseZoneReturns: 'returns history',
        eraseZonePurchases: 'purchases',
        eraseZoneOperations: 'customer operations',
        eraseConfirm: 'Delete {zone} for this month? (Recoverable)',
        eraseConfirmSalesHistory: 'Delete the full sales history? (Recoverable)',
        eraseConfirmReturnsHistory: 'Delete the full returns history? (Recoverable)',
        eraseClearedAlert: 'Data deleted (recoverable)',
        eraseNoBackup: 'No backup data available to recover',
        eraseRecoverConfirm: 'Recover all deleted data for this section?',
        eraseRecoverSalesHistory: 'Recover the full sales history?',
        eraseRecoverReturnsHistory: 'Recover the full returns history?',
        eraseRecoveredAlert: 'Data recovered successfully',
        syncLocalSaved: 'Local backup synchronized:',
        syncFileFailed: 'File sync failed (local server unavailable)',
        syncFileOffline: 'File sync unavailable (offline)',
        syncSavedInFolder: 'State saved in application folder:'
    },
    ar: {
        navDashboard: 'لوحة التحكم',
        navCalculator: 'الة حاسبة',
        navAchat: 'المشتريات',
        navSettings: 'الاعدادات',
        dashboardWelcome: 'مرحبا بك في ASIL CAISSE',
        dashboardDateFallback: 'تاريخ اليوم',
        dashReturnPoint: 'نقطة المرتجعات',
        dashDeliveryPoint: 'نقطة التوريد',
        dashSalesPoint: 'نقطة البيع',
        dashPurchasePoint: 'نقطة الشراء',
        dashSalesSub: 'المبيعات والتحصيل',
        dashPurchaseSub: 'طلبات شراء الموردين',
        dashReturnSub: 'ادارة المرتجعات',
        dashDeliverySub: 'المخزون والجرد',
        dashCaToday: 'مداخيل اليوم',
        dashProducts: 'المنتجات',
        dashClients: 'العملاء',
        dashOutStock: 'نفاد المخزون',
        viewStats: 'عرض الاحصائيات',
        viewInventory: 'عرض المخزون',
        viewClients: 'عرض العملاء',
        searchExistingClient: 'ابحث عن عميل موجود...',
        freeClientName: 'اسم العميل (حر)',
        cheque: 'شيك',
        transfer: 'تحويل بنكي',
        creditHint: 'الدفع بالاجل - ادخل اسم العميل',
        printShort: 'طباعة',
        clearShort: 'مسح',
        returnsTitleShort: 'ادارة المرتجعات',
        cancelShort: 'الغاء',
        returnsHistory: 'سجل المرتجعات',
        searchPlaceholder: 'بحث...',
        addProductShort: 'اضافة المنتج',
        saveShort: 'حفظ',
        returnSlip: 'وصل الارجاع',
        noProductAdded: 'لم يتم اضافة اي منتج',
        noReturns: 'لا توجد مرتجعات',
        noPurchases: 'لا توجد مشتريات',
        noClientFound: 'لم يتم العثور على عميل',
        noClientShort: 'بدون عميل',
        addClientFromSearch: 'اضافة "{name}" كعميل جديد',
        stockAlert: 'نفاد المخزون',
        statsProtectedAccess: 'وصول محمي',
        statsEnterPw: 'ادخل كلمة المرور لعرض الاحصائيات',
        paramsProtectedAccess: 'وصول محمي',
        paramsEnterPw: 'ادخل كلمة المرور للوصول الى الاعدادات',
        unlockShort: 'فتح',
        retHeaderNo: 'رقم',
        retHeaderDate: 'التاريخ',
        retHeaderClient: 'العميل',
        retHeaderProducts: 'المنتجات',
        retHeaderTotal: 'الاجمالي',
        retHeaderSlip: 'السند',
        achatHeaderNo: 'رقم السند',
        achatHeaderDate: 'التاريخ',
        achatHeaderSupplier: 'المورد',
        achatHeaderTotal: 'الاجمالي',
        achatHeaderSlip: 'السند',
        dashboardTitle: 'لوحة التحكم',
        greetMorning: 'صباح الخير',
        greetAfternoon: 'مساء الخير',
        greetEvening: 'مساء الخير',
        phonePlaceholder: 'الهاتف',
        qtyPlaceholder: 'الكمية',
        unitPricePlaceholder: 'سعر الوحدة',
        returnDateLabel: 'تاريخ الارجاع',
        returnClientLabel: 'العميل',
        returnClientPlaceholder: 'اسم العميل...',
        returnTypeLabel: 'نوع العملية :',
        returnSaleOption: 'ارجاع بيع',
        returnPurchaseOption: 'ارجاع شراء',
        returnProductLabel: 'المنتج (الاسم او المرجع)',
        returnProductPlaceholder: 'الاسم او المرجع...',
        returnUnitSaleLabel: 'سعر بيع الوحدة (DH)',
        returnSalePlaceholder: 'سعر البيع...',
        refundTotalLabel: 'اجمالي المسترجع',
        salesColLabel: 'الوصف',
        salesColQty: 'الكمية',
        salesColUnit: 'س.و',
        salesColDisc: 'خصم',
        salesColTotal: 'الاجمالي',
        clientSearchPlaceholder: 'ابحث عن عميل...',
        supplierSearchPlaceholder: 'ابحث عن مورد...',
        newClientBtn: 'عميل جديد',
        newSupplierBtn: 'مورد جديد',
        deleteAllBtn: 'حذف الكل',
        clientsTotalClients: 'اجمالي العملاء',
        clientsTotalCredit: 'اجمالي الدين',
        clientsTotalSales: 'اجمالي المبيعات',
        clientsTotalPayments: 'اجمالي المدفوعات',
        suppliersTotalSuppliers: 'اجمالي الموردين',
        suppliersTotalDue: 'اجمالي المستحق',
        suppliersTotalPurchases: 'اجمالي المشتريات',
        suppliersTotalPaid: 'اجمالي المدفوع',
        noSupplierFound: 'لم يتم العثور على مورد',
        clientFile: 'ملف العميل',
        supplierFile: 'ملف المورد',
        noPayments: 'لا توجد مدفوعات',
        noCreditSales: 'لا توجد مبيعات بالدين',
        clientsHeadClient: 'العميل',
        clientsHeadCode: 'رمز العميل',
        clientsHeadPhone: 'الهاتف',
        clientsHeadAddress: 'العنوان',
        clientsHeadSales: 'اجمالي المبيعات',
        clientsHeadPayments: 'اجمالي المدفوعات',
        clientsHeadReturns: 'اجمالي المرتجعات',
        clientsHeadCredit: 'الدين (المتبقي)',
        clientsHeadNote: 'ملاحظة',
        clientsHeadActions: 'الاجراءات',
        suppliersHeadSupplier: 'المورد',
        suppliersHeadPhone: 'الهاتف',
        suppliersHeadAddress: 'العنوان',
        suppliersHeadPurchases: 'اجمالي المشتريات',
        suppliersHeadPayments: 'اجمالي المدفوعات',
        suppliersHeadDue: 'المبلغ المستحق',
        suppliersHeadNote: 'ملاحظة',
        suppliersHeadActions: 'الاجراءات',
        salesHeadInvoice: 'رقم الفاتورة',
        salesHeadDate: 'التاريخ',
        salesHeadClient: 'العميل',
        salesHeadProducts: 'المنتجات',
        salesHeadTotal: 'الاجمالي',
        salesHeadPayment: 'الدفع',
        salesHeadSlip: 'السند',
        salesQuickActionsTitle: 'اجراءات سريعة',
        salesDeleteBtn: 'حذف السجل',
        salesRecoverBtn: 'استرجاع السجل',
        salesRecoverCount: '{count} عملية قابلة للاسترجاع (بدون حد زمني)',
        returnsQuickActionsTitle: 'اجراءات سريعة',
        returnsDeleteBtn: 'حذف سجل المرتجعات',
        returnsRecoverBtn: 'استرجاع سجل المرتجعات',
        returnsRecoverCount: '{count} عملية قابلة للاسترجاع (بدون حد زمني)',
        selectAllShort: 'تحديد الكل',
        deleteSelectedBtn: 'حذف المحدد',
        recoverSelectedBtn: 'استرجاع المحدد',
        deletePermanentlyBtn: 'حذف نهائي',
        deletePermanentlySelectedBtn: 'حذف نهائي للمحدد',
        deletePermanentlyAllBtn: 'حذف نهائي للكل',
        salesDeletedTitle: 'المبيعات المحذوفة',
        returnsDeletedTitle: 'المرتجعات المحذوفة',
        noDeletedSales: 'لا توجد مبيعات محذوفة',
        noDeletedReturns: 'لا توجد مرتجعات محذوفة',
        selectOneLineAlert: 'حدد سطرا واحدا على الاقل',
        deleteSelectedSalesConfirm: 'حذف المبيعات المحددة؟ (قابل للاسترجاع)',
        deleteSelectedReturnsConfirm: 'حذف المرتجعات المحددة؟ (قابل للاسترجاع)',
        recoverSelectedSalesConfirm: 'استرجاع المبيعات المحددة؟',
        recoverSelectedReturnsConfirm: 'استرجاع المرتجعات المحددة؟',
        deletePermanentlyOneSalesConfirm: 'حذف نهائي لهذه العملية؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlyOneReturnConfirm: 'حذف نهائي لهذا الارجاع؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlySelectedSalesConfirm: 'حذف نهائي للمبيعات المحددة؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlySelectedReturnsConfirm: 'حذف نهائي للمرتجعات المحددة؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlyAllSalesConfirm: 'حذف نهائي لكل المبيعات المحذوفة؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlyAllReturnsConfirm: 'حذف نهائي لكل المرتجعات المحذوفة؟ هذا الاجراء لا يمكن التراجع عنه.',
        deletePermanentlySuccess: 'تمت عملية الحذف النهائي',
        retQtyLabel: 'الكمية',
        achatSupplierPlaceholder: 'اسم المورد...',
        achatProdSearchPlaceholder: 'بحث...',
        clientPaymentTitle: 'تسجيل دفعة :',
        supplierPaymentTitle: 'تسجيل دفعة :',
        validatePaymentBtn: 'تاكيد الدفع',
        clientSlipSalesBtn: 'سند المبيعات',
        clientSlipPaymentsBtn: 'سند المدفوعات',
        clientSlipReturnsBtn: 'سند المرتجعات',
        supplierSlipPurchasesBtn: 'سند المشتريات',
        supplierSlipPaymentsBtn: 'سند المدفوعات',
        supplierSlipReturnsBtn: 'سند المرتجعات',
        supplierReturnRegisterTitle: 'تسجيل مرتجع :',
        supplierReturnNotePlaceholder: 'المرجع / السبب',
        statsPeriodTitle: 'ارباح الفترة :',
        statsFromLabel: 'من',
        statsToLabel: 'الى',
        retAddProductTitle: 'اضافة منتج',
        detailClose: 'اغلاق',
        amountDhPlaceholder: 'المبلغ DH',
        noteOptionalPlaceholder: 'ملاحظة (اختياري)',
        clientSalesCreditTitle: 'مبيعات بالدين',
        clientPaymentsTitle: 'المدفوعات',
        clientReturnsTitle: 'المرتجعات',
        supplierPurchasesTitle: 'المشتريات',
        supplierPaymentsTitle: 'المدفوعات',
        supplierReturnsTitle: 'مرتجعات المورد',
        validateShort: 'تاكيد',
        thDate: 'التاريخ',
        thReference: 'المرجع',
        thAmount: 'المبلغ',
        thNote: 'ملاحظة',
        thReturnedProducts: 'المنتجات المرتجعة',
        statsCaTodayLabel: 'مداخيل اليوم',
        statsCaTodaySub: 'مجموع كل مبيعات اليوم',
        statsClientPaymentsLabel: 'مدفوعات العملاء (اليوم)',
        statsClientPaymentsSub: 'المدفوعات المستلمة اليوم',
        statsCreditSalesTodayLabel: 'مبيعات بالدين (اليوم)',
        statsCreditSalesTodaySub: 'فواتير بنظام الدين',
        statsNetLabel: 'صافي المداخيل',
        statsNetSub: 'المداخيل + المدفوعات - الدين - المرتجعات',
        statsMonthSalesLabel: 'اجمالي المبيعات (الشهر)',
        statsMonthPurchasesLabel: 'اجمالي المشتريات (الشهر)',
        statsMonthProfitLabel: 'الربح (الشهر)',
        statsMonthProfitSub: 'المبيعات - المشتريات',
        statsTopProductsTitle: 'اكثر المنتجات مبيعا',
        cdStatSalesLabel: 'اجمالي المبيعات (دين)',
        cdStatPaymentsLabel: 'اجمالي المدفوعات',
        cdStatReturnsLabel: 'اجمالي المرتجعات',
        cdStatCreditLabel: 'الدين الحالي',
        sdStatPurchasesLabel: 'اجمالي المشتريات',
        sdStatPaymentsLabel: 'اجمالي المدفوعات',
        sdStatReturnsLabel: 'اجمالي المرتجعات',
        sdStatDueLabel: 'المبلغ المستحق',
        paramLangTitle: 'لغة السندات والايصالات',
        paramLangHint: 'اللغة المختارة تطبق على جميع السندات والايصالات المطبوعة (فاتورة، سند شراء، سند ارجاع).',
        paramLangFrLabel: 'الفرنسية',
        paramLangEnLabel: 'الانجليزية',
        paramLangArLabel: 'العربية',
        paramLangFrBtn: '🇫🇷 الفرنسية',
        paramLangEnBtn: '🇬🇧 الانجليزية',
        paramLangArBtn: '🇸🇦 العربية',
        paramThemeTitle: 'الالوان والمظهر',
        paramThemeMorning: 'صباح',
        paramThemeEvening: 'مساء',
        paramThemePalettes: 'لوحات الالوان الجاهزة :',
        paramThemeCustomColor: 'لون مخصص',
        paramThemeReset: 'افتراضي',
        paramThemePresetGreenDefault: 'اخضر (افتراضي)',
        paramThemePresetBlue: 'ازرق',
        paramThemePresetRed: 'احمر',
        paramThemePresetPurple: 'بنفسجي',
        paramThemePresetOrange: 'برتقالي',
        paramThemePresetTeal: 'فيروزي',
        paramThemePresetIndigo: 'نيلي',
        paramThemePresetDarkGray: 'رمادي داكن',
        paramCompanyTitle: 'معلومات الشركة',
        paramCompanyNameLabel: 'اسم الشركة',
        paramCompanyAddrLabel: 'العنوان',
        paramCompanyTelLabel: 'الهاتف',
        paramCompanySaveBtn: 'حفظ',
        paramCompanyAddrPh: 'العنوان...',
        paramLogoTitle: 'شعار وصورة الشركة',
        paramLogoClickLabel: 'اضغط لاضافة الشعار',
        paramLogoFormatLabel: 'PNG, JPG, SVG - الحد الاقصى 2 MB',
        paramLogoChooseBtn: 'اختيار صورة',
        paramLogoNote: 'يظهر في جميع السندات والايصالات والفواتير المطبوعة.',
        paramTicketPreviewTitle: 'معاينة الايصال',
        paramTicketSampleProduct1: 'منتج تجريبي',
        paramTicketSampleProduct2: 'منتج اخر',
        paramTicketPreviewRefreshBtn: 'تحديث المعاينة',
        paramSignatureTitle: 'التوقيع',
        paramSignatureSaveBtn: 'حفظ',
        paramSignatureClearBtn: 'مسح',
        paramPasswordTitle: 'تغيير كلمة المرور',
        paramPwCurLabel: 'كلمة المرور الحالية',
        paramPwNewLabel: 'كلمة المرور الجديدة',
        paramPwConfLabel: 'تاكيد كلمة المرور الجديدة',
        paramPwCurPh: 'الحالية...',
        paramPwNewPh: 'الجديدة (الحد الادنى 4 احرف)...',
        paramPwConfPh: 'تاكيد...',
        paramPwUpdateBtn: 'تحديث كلمة المرور',
        paramSoundTitle: 'الصوت',
        paramSoundBeep: 'صفارة عادية',
        paramSoundDouble: 'صفارة مزدوجة',
        paramSoundMelody: 'نغمة',
        paramSoundSuccess: 'تاكيد',
        paramSoundWarn: 'تنبيه',
        paramSoundDelete: 'حذف',
        paramSoundMute: 'صامت',
        paramBackupTitle: 'نسخ احتياطي دون اتصال',
        paramBackupHint: 'يتم حفظ البيانات محليا في وضع عدم الاتصال (IndexedDB). قم بتصدير نسخة احتياطية بانتظام.',
        paramBackupExportBtn: 'تصدير JSON',
        paramBackupImportBtn: 'استيراد JSON',
        paramBackupSyncBtn: 'مزامنة الان',
        paramTrashTitle: 'سلة المحذوفات',
        paramTrashHint: 'العناصر المحذوفة (العملاء، الموردون، المنتجات) تحفظ هنا ويمكن استرجاعها في اي وقت.',
        paramTrashEmptyBtn: 'افراغ سلة المحذوفات نهائيا',
        paramEraseTitle: 'حذف البيانات حسب القسم',
        paramEraseWarning: 'تبقى البيانات المحذوفة قابلة للاسترجاع في اي وقت عبر زر "استرجاع".',
        paramEraseSalesTitle: 'سجل المبيعات',
        paramEraseReturnsTitle: 'سجل المرتجعات',
        paramErasePurchasesTitle: 'مشتريات الشهر',
        paramEraseOpsTitle: 'عمليات العملاء للشهر',
        paramEraseBtn: 'حذف',
        paramRecoverBtn: 'استرجاع',
        trashEmpty: 'سلة المحذوفات فارغة ✅',
        trashTypeClient: 'عميل',
        trashTypeSupplier: 'مورد',
        trashTypeProduct: 'منتج',
        trashDeletedOn: 'تم الحذف بتاريخ {date}',
        trashEmptyConfirm: 'افراغ سلة المحذوفات نهائيا؟',
        trashEmptiedAlert: 'تم افراغ سلة المحذوفات',
        trashRecoveredAlert: 'تم استرجاع العنصر',
        eraseCountSales: '{count} عملية بيع في السجل',
        eraseCountReturns: '{count} عملية مرتجع في السجل',
        eraseCountPurchases: '{count} عملية شراء هذا الشهر',
        eraseCountOperations: '{count} عملية هذا الشهر',
        eraseZoneSales: 'سجل المبيعات',
        eraseZoneReturns: 'سجل المرتجعات',
        eraseZonePurchases: 'المشتريات',
        eraseZoneOperations: 'عمليات العملاء',
        eraseConfirm: 'حذف {zone} لهذا الشهر؟ (يمكن الاسترجاع)',
        eraseConfirmSalesHistory: 'حذف سجل المبيعات بالكامل؟ (يمكن الاسترجاع)',
        eraseConfirmReturnsHistory: 'حذف سجل المرتجعات بالكامل؟ (يمكن الاسترجاع)',
        eraseClearedAlert: 'تم حذف البيانات (يمكن استرجاعها)',
        eraseNoBackup: 'لا توجد بيانات احتياطية متاحة للاسترجاع',
        eraseRecoverConfirm: 'استرجاع كل البيانات المحذوفة لهذا القسم؟',
        eraseRecoverSalesHistory: 'استرجاع سجل المبيعات بالكامل؟',
        eraseRecoverReturnsHistory: 'استرجاع سجل المرتجعات بالكامل؟',
        eraseRecoveredAlert: 'تم استرجاع البيانات بنجاح',
        syncLocalSaved: 'تمت مزامنة النسخة المحلية:',
        syncFileFailed: 'فشلت مزامنة الملف (الخادم المحلي غير متاح)',
        syncFileOffline: 'تعذر مزامنة الملف (دون اتصال)',
        syncSavedInFolder: 'تم حفظ الحالة في مجلد التطبيق:'
    }
};

function mt(key, fallback) {
    const bundle = MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr;
    return bundle[key] || fallback || key;
}

function mtf(key, fallback, vars) {
    let text = mt(key, fallback);
    Object.entries(vars || {}).forEach(([name, value]) => {
        text = text.split(`{${name}}`).join(String(value));
    });
    return text;
}

const MANUAL_UI_BINDINGS = [
    { selector: '[data-tab="dashboard"] span:last-child', key: 'navDashboard' },
    { selector: '[data-tab="calculatrice"] span:last-child', key: 'navCalculator' },
    { selector: '[data-tab="achat"] span:last-child', key: 'navAchat' },
    { selector: '[data-tab="parametres"] span:last-child', key: 'navSettings' },
    { selector: '#tab-dashboard .dash-card.orange .dash-card-title', key: 'dashReturnPoint' },
    { selector: '#tab-dashboard .dash-card.purple .dash-card-title', key: 'dashDeliveryPoint' },
    { selector: '#tab-dashboard .dash-card.green .dash-card-title', key: 'dashSalesPoint' },
    { selector: '#tab-dashboard .dash-card.blue .dash-card-title', key: 'dashPurchasePoint' },
    { selector: '#tab-dashboard .dash-card.green .dash-card-sub', key: 'dashSalesSub' },
    { selector: '#tab-dashboard .dash-card.blue .dash-card-sub', key: 'dashPurchaseSub' },
    { selector: '#tab-dashboard .dash-card.orange .dash-card-sub', key: 'dashReturnSub' },
    { selector: '#tab-dashboard .dash-card.purple .dash-card-sub', key: 'dashDeliverySub' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(1) .stat-label', key: 'dashCaToday' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(2) .stat-label', key: 'dashProducts' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(3) .stat-label', key: 'dashClients' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(4) .stat-label', key: 'dashOutStock' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(1) div[style*="font-size:13px"]', key: 'viewStats' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(2) div[style*="font-size:13px"]', key: 'viewInventory' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(3) div[style*="font-size:13px"]', key: 'viewClients' },
    { selector: '#tab-dashboard .stats-grid .dash-card:nth-child(4) div[style*="font-size:13px"]', key: 'viewInventory' },
    { selector: '#pos-client-search', key: 'searchExistingClient', attr: 'placeholder' },
    { selector: '#pos-free-name', key: 'freeClientName', attr: 'placeholder' },
    { selector: '#pos-free-phone', key: 'phonePlaceholder', attr: 'placeholder' },
    { selector: '#pos-custom-qty', key: 'qtyPlaceholder', attr: 'placeholder' },
    { selector: '#pos-custom-price', key: 'unitPricePlaceholder', attr: 'placeholder' },
    { selector: '#pay-cheque .pay-label', key: 'cheque' },
    { selector: '#pay-virement .pay-label', key: 'transfer' },
    { selector: '#credit-block', key: 'creditHint' },
    { selector: '.btn-print', key: 'printShort' },
    { selector: '.btn-clear', key: 'clearShort' },
    { selector: '#tab-retours .card-title span', key: 'returnsTitleShort' },
    { selector: '#tab-retours .card-title button', key: 'cancelShort' },
    { selector: '#tab-retours .card:nth-child(2) .card-title', key: 'returnsHistory' },
    { selector: '#ret-search', key: 'searchPlaceholder', attr: 'placeholder' },
    { selector: '#tab-retours button[onclick="addReturnProduct()"]', key: 'addProductShort' },
    { selector: '#tab-retours button[onclick="saveReturn()"]', key: 'saveShort' },
    { selector: '#tab-retours button[onclick="printCurrentReturnSlip()"]', key: 'returnSlip' },
    { selector: '#ret-products-list > div', key: 'noProductAdded' },
    { selector: '#achat-products-list > div', key: 'noProductAdded' },
    { selector: '#achat-search', key: 'searchPlaceholder', attr: 'placeholder' },
    { selector: '#ret-client-name', key: 'returnClientPlaceholder', attr: 'placeholder' },
    { selector: '#ret-product-name', key: 'returnProductPlaceholder', attr: 'placeholder' },
    { selector: '#ret-unit-price', key: 'returnSalePlaceholder', attr: 'placeholder' },
    { selector: '#ret-qty-label', key: 'retQtyLabel' },
    { selector: '#client-search', key: 'clientSearchPlaceholder', attr: 'placeholder' },
    { selector: '#supplier-search', key: 'supplierSearchPlaceholder', attr: 'placeholder' },
    { selector: '#achat-supplier', key: 'achatSupplierPlaceholder', attr: 'placeholder' },
    { selector: '#achat-prod-name', key: 'achatProdSearchPlaceholder', attr: 'placeholder' },
    { selector: '#tab-clients .zone-toolbar button[onclick="openClientModal()"]', key: 'newClientBtn' },
    { selector: '#tab-fournisseurs .zone-toolbar button[onclick="openSupplierModal()"]', key: 'newSupplierBtn' },
    { selector: '#tab-clients .zone-toolbar button[onclick="deleteAllClients()"]', key: 'deleteAllBtn' },
    { selector: '#tab-fournisseurs .zone-toolbar button[onclick="deleteAllSuppliers()"]', key: 'deleteAllBtn' },
    { selector: '#tab-clients .stats-grid .stat-card:nth-child(1) .stat-label', key: 'clientsTotalClients' },
    { selector: '#tab-clients .stats-grid .stat-card:nth-child(2) .stat-label', key: 'clientsTotalCredit' },
    { selector: '#tab-clients .stats-grid .stat-card:nth-child(3) .stat-label', key: 'clientsTotalSales' },
    { selector: '#tab-clients .stats-grid .stat-card:nth-child(4) .stat-label', key: 'clientsTotalPayments' },
    { selector: '#tab-fournisseurs .stats-grid .stat-card:nth-child(1) .stat-label', key: 'suppliersTotalSuppliers' },
    { selector: '#tab-fournisseurs .stats-grid .stat-card:nth-child(2) .stat-label', key: 'suppliersTotalDue' },
    { selector: '#tab-fournisseurs .stats-grid .stat-card:nth-child(3) .stat-label', key: 'suppliersTotalPurchases' },
    { selector: '#tab-fournisseurs .stats-grid .stat-card:nth-child(4) .stat-label', key: 'suppliersTotalPaid' },
    { selector: '#btn-back-dashboard', key: 'navDashboard' },
    { selector: '#client-detail-title', key: 'clientFile' },
    { selector: '#supplier-detail-title', key: 'supplierFile' },
    { selector: '#tab-clients table thead tr th:nth-child(1)', key: 'clientsHeadClient' },
    { selector: '#tab-clients table thead tr th:nth-child(2)', key: 'clientsHeadCode' },
    { selector: '#tab-clients table thead tr th:nth-child(3)', key: 'clientsHeadPhone' },
    { selector: '#tab-clients table thead tr th:nth-child(4)', key: 'clientsHeadAddress' },
    { selector: '#tab-clients table thead tr th:nth-child(5)', key: 'clientsHeadSales' },
    { selector: '#tab-clients table thead tr th:nth-child(6)', key: 'clientsHeadPayments' },
    { selector: '#tab-clients table thead tr th:nth-child(7)', key: 'clientsHeadReturns' },
    { selector: '#tab-clients table thead tr th:nth-child(8)', key: 'clientsHeadCredit' },
    { selector: '#tab-clients table thead tr th:nth-child(9)', key: 'clientsHeadNote' },
    { selector: '#tab-clients table thead tr th:nth-child(10)', key: 'clientsHeadActions' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(1)', key: 'suppliersHeadSupplier' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(2)', key: 'suppliersHeadPhone' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(3)', key: 'suppliersHeadAddress' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(4)', key: 'suppliersHeadPurchases' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(5)', key: 'suppliersHeadPayments' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(6)', key: 'suppliersHeadDue' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(7)', key: 'suppliersHeadNote' },
    { selector: '#tab-fournisseurs table thead tr th:nth-child(8)', key: 'suppliersHeadActions' },
    { selector: '#sales-th-invoice-label', key: 'salesHeadInvoice' },
    { selector: '#sales-th-date-label', key: 'salesHeadDate' },
    { selector: '#sales-th-client-label', key: 'salesHeadClient' },
    { selector: '#sales-th-products-label', key: 'salesHeadProducts' },
    { selector: '#sales-th-total-label', key: 'salesHeadTotal' },
    { selector: '#sales-th-payment-label', key: 'salesHeadPayment' },
    { selector: '#sales-th-slip-label', key: 'salesHeadSlip' },
    { selector: '#sales-actions-title', key: 'salesQuickActionsTitle' },
    { selector: '#sales-select-all-label', key: 'selectAllShort' },
    { selector: '#sales-delete-btn', key: 'salesDeleteBtn' },
    { selector: '#sales-recover-btn', key: 'salesRecoverBtn' },
    { selector: '#sales-delete-selected-btn', key: 'deleteSelectedBtn' },
    { selector: '#sales-recover-selected-btn', key: 'recoverSelectedBtn' },
    { selector: '#sales-permanent-delete-selected-btn', key: 'deletePermanentlySelectedBtn' },
    { selector: '#sales-permanent-delete-all-btn', key: 'deletePermanentlyAllBtn' },
    { selector: '#sales-deleted-title', key: 'salesDeletedTitle' },
    { selector: '#returns-actions-title', key: 'returnsQuickActionsTitle' },
    { selector: '#returns-select-all-label', key: 'selectAllShort' },
    { selector: '#returns-delete-btn', key: 'returnsDeleteBtn' },
    { selector: '#returns-recover-btn', key: 'returnsRecoverBtn' },
    { selector: '#returns-delete-selected-btn', key: 'deleteSelectedBtn' },
    { selector: '#returns-recover-selected-btn', key: 'recoverSelectedBtn' },
    { selector: '#returns-permanent-delete-selected-btn', key: 'deletePermanentlySelectedBtn' },
    { selector: '#returns-permanent-delete-all-btn', key: 'deletePermanentlyAllBtn' },
    { selector: '#returns-deleted-title', key: 'returnsDeletedTitle' },
    { selector: '#cd-payment-title', key: 'clientPaymentTitle' },
    { selector: '#sd-payment-title', key: 'supplierPaymentTitle' },
    { selector: '#cd-payment-validate-btn', key: 'validatePaymentBtn' },
    { selector: '#sd-payment-validate-btn', key: 'validatePaymentBtn' },
    { selector: '#cd-print-sales-btn', key: 'clientSlipSalesBtn' },
    { selector: '#cd-print-payments-btn', key: 'clientSlipPaymentsBtn' },
    { selector: '#cd-print-returns-btn', key: 'clientSlipReturnsBtn' },
    { selector: '#sd-print-purchases-btn', key: 'supplierSlipPurchasesBtn' },
    { selector: '#sd-print-payments-btn', key: 'supplierSlipPaymentsBtn' },
    { selector: '#sd-print-returns-btn', key: 'supplierSlipReturnsBtn' },
    { selector: '#sd-return-register-title', key: 'supplierReturnRegisterTitle' },
    { selector: '#sup-ret-note', key: 'supplierReturnNotePlaceholder', attr: 'placeholder' },
    { selector: '#stats-period-title', key: 'statsPeriodTitle' },
    { selector: '#ret-add-product-title', key: 'retAddProductTitle' },
    { selector: '#client-detail-close-btn', key: 'detailClose' },
    { selector: '#supplier-detail-close-btn', key: 'detailClose' },
    { selector: '#pay-amount', key: 'amountDhPlaceholder', attr: 'placeholder' },
    { selector: '#sup-pay-amount', key: 'amountDhPlaceholder', attr: 'placeholder' },
    { selector: '#sup-ret-amount', key: 'amountDhPlaceholder', attr: 'placeholder' },
    { selector: '#pay-note', key: 'noteOptionalPlaceholder', attr: 'placeholder' },
    { selector: '#sup-pay-note', key: 'noteOptionalPlaceholder', attr: 'placeholder' },
    { selector: '#cd-sales-title', key: 'clientSalesCreditTitle' },
    { selector: '#cd-payments-title', key: 'clientPaymentsTitle' },
    { selector: '#cd-returns-title', key: 'clientReturnsTitle' },
    { selector: '#sd-purchases-title', key: 'supplierPurchasesTitle' },
    { selector: '#sd-payments-title', key: 'supplierPaymentsTitle' },
    { selector: '#sd-returns-title', key: 'supplierReturnsTitle' },
    { selector: '#sd-return-validate-btn', key: 'validateShort' },
    { selector: '#cd-sales-th-date', key: 'thDate' },
    { selector: '#cd-sales-th-ref', key: 'thReference' },
    { selector: '#cd-sales-th-amount', key: 'thAmount' },
    { selector: '#cd-payments-th-date', key: 'thDate' },
    { selector: '#cd-payments-th-note', key: 'thNote' },
    { selector: '#cd-payments-th-amount', key: 'thAmount' },
    { selector: '#cd-returns-th-date', key: 'thDate' },
    { selector: '#cd-returns-th-ref', key: 'thReference' },
    { selector: '#cd-returns-th-products', key: 'thReturnedProducts' },
    { selector: '#cd-returns-th-amount', key: 'thAmount' },
    { selector: '#sd-purchases-th-date', key: 'thDate' },
    { selector: '#sd-purchases-th-ref', key: 'thReference' },
    { selector: '#sd-purchases-th-amount', key: 'thAmount' },
    { selector: '#sd-payments-th-date', key: 'thDate' },
    { selector: '#sd-payments-th-note', key: 'thNote' },
    { selector: '#sd-payments-th-amount', key: 'thAmount' },
    { selector: '#sd-returns-th-date', key: 'thDate' },
    { selector: '#sd-returns-th-ref', key: 'thReference' },
    { selector: '#sd-returns-th-amount', key: 'thAmount' },
    { selector: '#s-label-ca-today', key: 'statsCaTodayLabel' },
    { selector: '#s-sub-ca-today', key: 'statsCaTodaySub' },
    { selector: '#s-label-reglements', key: 'statsClientPaymentsLabel' },
    { selector: '#s-sub-reglements', key: 'statsClientPaymentsSub' },
    { selector: '#s-label-credit', key: 'statsCreditSalesTodayLabel' },
    { selector: '#s-sub-credit', key: 'statsCreditSalesTodaySub' },
    { selector: '#s-label-net', key: 'statsNetLabel' },
    { selector: '#s-sub-net', key: 'statsNetSub' },
    { selector: '#s-label-month-sales', key: 'statsMonthSalesLabel' },
    { selector: '#s-label-month-purchases', key: 'statsMonthPurchasesLabel' },
    { selector: '#s-label-month-profit', key: 'statsMonthProfitLabel' },
    { selector: '#s-sub-month-profit', key: 'statsMonthProfitSub' },
    { selector: '#stats-top-products-title', key: 'statsTopProductsTitle' },
    { selector: '#cd-stat-sales-label', key: 'cdStatSalesLabel' },
    { selector: '#cd-stat-payments-label', key: 'cdStatPaymentsLabel' },
    { selector: '#cd-stat-returns-label', key: 'cdStatReturnsLabel' },
    { selector: '#cd-stat-credit-label', key: 'cdStatCreditLabel' },
    { selector: '#sd-stat-purchases-label', key: 'sdStatPurchasesLabel' },
    { selector: '#sd-stat-payments-label', key: 'sdStatPaymentsLabel' },
    { selector: '#sd-stat-returns-label', key: 'sdStatReturnsLabel' },
    { selector: '#sd-stat-due-label', key: 'sdStatDueLabel' },
    { selector: '#param-lang-title', key: 'paramLangTitle' },
    { selector: '#param-lang-hint', key: 'paramLangHint' },
    { selector: '#param-lang-fr-label', key: 'paramLangFrLabel' },
    { selector: '#param-lang-en-label', key: 'paramLangEnLabel' },
    { selector: '#param-lang-ar-label', key: 'paramLangArLabel' },
    { selector: '#lang-btn-fr', key: 'paramLangFrBtn' },
    { selector: '#lang-btn-en', key: 'paramLangEnBtn' },
    { selector: '#lang-btn-ar', key: 'paramLangArBtn' },
    { selector: '#param-theme-title', key: 'paramThemeTitle' },
    { selector: '#theme-matin', key: 'paramThemeMorning' },
    { selector: '#theme-soir', key: 'paramThemeEvening' },
    { selector: '#param-theme-palettes-label', key: 'paramThemePalettes' },
    { selector: '#param-theme-custom-color-label', key: 'paramThemeCustomColor' },
    { selector: '#param-theme-reset-btn', key: 'paramThemeReset' },
    { selector: '#param-company-title', key: 'paramCompanyTitle' },
    { selector: '#param-company-name-label', key: 'paramCompanyNameLabel' },
    { selector: '#param-company-addr-label', key: 'paramCompanyAddrLabel' },
    { selector: '#param-company-tel-label', key: 'paramCompanyTelLabel' },
    { selector: '#param-company-save-btn', key: 'paramCompanySaveBtn' },
    { selector: '#param-company-addr', key: 'paramCompanyAddrPh', attr: 'placeholder' },
    { selector: '#param-logo-title', key: 'paramLogoTitle' },
    { selector: '#param-logo-click-label', key: 'paramLogoClickLabel' },
    { selector: '#param-logo-format-label', key: 'paramLogoFormatLabel' },
    { selector: '#param-logo-choose-btn', key: 'paramLogoChooseBtn' },
    { selector: '#param-logo-note', key: 'paramLogoNote' },
    { selector: '#param-ticket-preview-title', key: 'paramTicketPreviewTitle' },
    { selector: '#param-ticket-preview-refresh-btn', key: 'paramTicketPreviewRefreshBtn' },
    { selector: '#param-signature-title', key: 'paramSignatureTitle' },
    { selector: '#param-signature-save-btn', key: 'paramSignatureSaveBtn' },
    { selector: '#param-signature-clear-btn', key: 'paramSignatureClearBtn' },
    { selector: '#param-password-title', key: 'paramPasswordTitle' },
    { selector: '#param-pw-cur-label', key: 'paramPwCurLabel' },
    { selector: '#param-pw-new-label', key: 'paramPwNewLabel' },
    { selector: '#param-pw-conf-label', key: 'paramPwConfLabel' },
    { selector: '#param-pw-cur', key: 'paramPwCurPh', attr: 'placeholder' },
    { selector: '#param-pw-new', key: 'paramPwNewPh', attr: 'placeholder' },
    { selector: '#param-pw-conf', key: 'paramPwConfPh', attr: 'placeholder' },
    { selector: '#param-pw-update-btn', key: 'paramPwUpdateBtn' },
    { selector: '#param-sound-title', key: 'paramSoundTitle' },
    { selector: '#param-sound-beep-label', key: 'paramSoundBeep' },
    { selector: '#param-sound-double-label', key: 'paramSoundDouble' },
    { selector: '#param-sound-melody-label', key: 'paramSoundMelody' },
    { selector: '#param-sound-success-label', key: 'paramSoundSuccess' },
    { selector: '#param-sound-warn-label', key: 'paramSoundWarn' },
    { selector: '#param-sound-delete-label', key: 'paramSoundDelete' },
    { selector: '#param-sound-mute-label', key: 'paramSoundMute' },
    { selector: '#param-backup-title', key: 'paramBackupTitle' },
    { selector: '#param-backup-hint', key: 'paramBackupHint' },
    { selector: '#param-backup-export-btn', key: 'paramBackupExportBtn' },
    { selector: '#param-backup-import-btn', key: 'paramBackupImportBtn' },
    { selector: '#param-backup-sync-btn', key: 'paramBackupSyncBtn' },
    { selector: '#param-trash-title', key: 'paramTrashTitle' },
    { selector: '#param-trash-hint', key: 'paramTrashHint' },
    { selector: '#param-trash-empty-btn', key: 'paramTrashEmptyBtn' },
    { selector: '#param-erase-title', key: 'paramEraseTitle' },
    { selector: '#param-erase-warning', key: 'paramEraseWarning' },
    { selector: '#param-erase-sales-title', key: 'paramEraseSalesTitle' },
    { selector: '#param-erase-returns-title', key: 'paramEraseReturnsTitle' },
    { selector: '#param-erase-purchases-title', key: 'paramErasePurchasesTitle' },
    { selector: '#param-erase-ops-title', key: 'paramEraseOpsTitle' },
    { selector: '#param-erase-sales-btn', key: 'paramEraseBtn' },
    { selector: '#param-erase-returns-btn', key: 'paramEraseBtn' },
    { selector: '#param-erase-purchases-btn', key: 'paramEraseBtn' },
    { selector: '#param-erase-ops-btn', key: 'paramEraseBtn' },
    { selector: '#param-recover-sales-btn', key: 'paramRecoverBtn' },
    { selector: '#param-recover-returns-btn', key: 'paramRecoverBtn' },
    { selector: '#param-recover-purchases-btn', key: 'paramRecoverBtn' },
    { selector: '#param-recover-ops-btn', key: 'paramRecoverBtn' }
];

function applyManualUiTranslations() {
    const bundle = MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr;
    MANUAL_UI_BINDINGS.forEach(binding => {
        const value = bundle[binding.key];
        if (!value) return;
        document.querySelectorAll(binding.selector).forEach(el => {
            if (binding.attr === 'placeholder') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        });
    });

    const stockBadge = document.getElementById('stock-alert-badge');
    if (stockBadge) {
        stockBadge.innerHTML = `<svg class="icon-svg" style="width:12px;height:12px;margin-right:4px;"><use href="#i-alert"></use></svg>${bundle.stockAlert || 'Rupture de stock'}`;
    }

    const statsH3 = document.querySelector('#stats-lock h3');
    if (statsH3) statsH3.textContent = bundle.statsProtectedAccess || statsH3.textContent;
    const statsP = document.querySelector('#stats-lock p');
    if (statsP) statsP.textContent = bundle.statsEnterPw || statsP.textContent;
    const statsBtn = document.querySelector('#stats-lock button[onclick="unlockStats()"]');
    if (statsBtn) statsBtn.textContent = bundle.unlockShort || statsBtn.textContent;

    const paramH3 = document.querySelector('#param-lock h3');
    if (paramH3) paramH3.textContent = bundle.paramsProtectedAccess || paramH3.textContent;
    const paramP = document.querySelector('#param-lock p');
    if (paramP) paramP.textContent = bundle.paramsEnterPw || paramP.textContent;
    const paramBtn = document.querySelector('#param-lock button[onclick="unlockParam()"]');
    if (paramBtn) paramBtn.textContent = bundle.unlockShort || paramBtn.textContent;

    const retHeaders = document.querySelectorAll('#tab-retours table thead tr th');
    if (retHeaders.length >= 6) {
        retHeaders[0].textContent = bundle.retHeaderNo || retHeaders[0].textContent;
        retHeaders[1].textContent = bundle.retHeaderDate || retHeaders[1].textContent;
        retHeaders[2].textContent = bundle.retHeaderClient || retHeaders[2].textContent;
        retHeaders[3].textContent = bundle.retHeaderProducts || retHeaders[3].textContent;
        retHeaders[4].textContent = bundle.retHeaderTotal || retHeaders[4].textContent;
        retHeaders[5].textContent = bundle.retHeaderSlip || retHeaders[5].textContent;
    }

    const achatHeaders = document.querySelectorAll('#tab-achat table thead tr th');
    if (achatHeaders.length >= 5) {
        achatHeaders[0].textContent = bundle.achatHeaderNo || achatHeaders[0].textContent;
        achatHeaders[1].textContent = bundle.achatHeaderDate || achatHeaders[1].textContent;
        achatHeaders[2].textContent = bundle.achatHeaderSupplier || achatHeaders[2].textContent;
        achatHeaders[3].textContent = bundle.achatHeaderTotal || achatHeaders[3].textContent;
        achatHeaders[4].textContent = bundle.achatHeaderSlip || achatHeaders[4].textContent;
    }

    const cartHeaders = document.querySelectorAll('#cart-items-list table thead th');
    if (cartHeaders.length >= 5) {
        cartHeaders[0].textContent = bundle.salesColLabel || cartHeaders[0].textContent;
        cartHeaders[1].textContent = bundle.salesColQty || cartHeaders[1].textContent;
        cartHeaders[2].textContent = bundle.salesColUnit || cartHeaders[2].textContent;
        cartHeaders[3].textContent = bundle.salesColDisc || cartHeaders[3].textContent;
        cartHeaders[4].textContent = bundle.salesColTotal || cartHeaders[4].textContent;
    }

    const retDateInput = document.getElementById('ret-date');
    if (retDateInput) {
        const retDateGroup = retDateInput.closest('.form-group');
        const retDateLabel = retDateGroup ? retDateGroup.querySelector('label') : null;
        if (retDateLabel) retDateLabel.textContent = bundle.returnDateLabel || retDateLabel.textContent;
    }
    const retClientInput = document.getElementById('ret-client-name');
    if (retClientInput) {
        const retClientGroup = retClientInput.closest('.form-group');
        const retClientLabel = retClientGroup ? retClientGroup.querySelector('label') : null;
        if (retClientLabel) retClientLabel.textContent = bundle.returnClientLabel || retClientLabel.textContent;
    }
    const retProductInput = document.getElementById('ret-product-name');
    if (retProductInput) {
        const retProductGroup = retProductInput.closest('.form-group');
        const retProductLabel = retProductGroup ? retProductGroup.querySelector('label') : null;
        if (retProductLabel) retProductLabel.textContent = bundle.returnProductLabel || retProductLabel.textContent;
    }
    const retUnitPriceInput = document.getElementById('ret-unit-price');
    if (retUnitPriceInput) {
        const retUnitPriceGroup = retUnitPriceInput.closest('.form-group');
        const retUnitPriceLabel = retUnitPriceGroup ? retUnitPriceGroup.querySelector('label') : null;
        if (retUnitPriceLabel) retUnitPriceLabel.textContent = bundle.returnUnitSaleLabel || retUnitPriceLabel.textContent;
    }
    const retTypeLabel = document.querySelector('#tab-retours div[style*="background:#fff3e0"] span');
    if (retTypeLabel) retTypeLabel.textContent = bundle.returnTypeLabel || retTypeLabel.textContent;
    const retRefundTitle = document.querySelector('#tab-retours .refund-display h3');
    if (retRefundTitle) retRefundTitle.textContent = bundle.refundTotalLabel || retRefundTitle.textContent;

    const paletteKeys = [
        'paramThemePresetGreenDefault',
        'paramThemePresetBlue',
        'paramThemePresetRed',
        'paramThemePresetPurple',
        'paramThemePresetOrange',
        'paramThemePresetTeal',
        'paramThemePresetIndigo',
        'paramThemePresetDarkGray'
    ];
    document.querySelectorAll('#tab-parametres .color-preset').forEach((el, index) => {
        const key = paletteKeys[index];
        if (key && bundle[key]) el.title = bundle[key];
    });

    const ticketPreviewSampleNames = document.querySelectorAll('#ticket-preview-live .tp-row span:first-child');
    if (ticketPreviewSampleNames[0]) ticketPreviewSampleNames[0].textContent = bundle.paramTicketSampleProduct1 || ticketPreviewSampleNames[0].textContent;
    if (ticketPreviewSampleNames[1]) ticketPreviewSampleNames[1].textContent = bundle.paramTicketSampleProduct2 || ticketPreviewSampleNames[1].textContent;

    const setInlineLabel = (inputSelector, text) => {
        const input = document.querySelector(inputSelector);
        if (!input) return;
        const label = input.closest('label');
        if (!label) return;
        Array.from(label.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) label.removeChild(node);
        });
        label.appendChild(document.createTextNode(' ' + text));
    };
    setInlineLabel('input[name="ret-op-type"][value="vente"]', bundle.returnSaleOption || 'Retour de vente');
    setInlineLabel('input[name="ret-op-type"][value="achat"]', bundle.returnPurchaseOption || 'Retour d\'achat');
    setInlineLabel('#stat-date-from', bundle.statsFromLabel || 'Debut');
    setInlineLabel('#stat-date-to', bundle.statsToLabel || 'Fin');

    const clientEmpty = document.querySelector('#client-table-body td[colspan="10"]');
    if (clientEmpty && clientEmpty.textContent.trim()) clientEmpty.textContent = bundle.noClientFound || clientEmpty.textContent;
    const supplierEmpty = document.querySelector('#supplier-table-body td[colspan="8"]');
    if (supplierEmpty && supplierEmpty.textContent.trim()) supplierEmpty.textContent = bundle.noSupplierFound || supplierEmpty.textContent;
    const returnsEmpty = document.querySelector('#returns-table td[colspan="6"]');
    if (returnsEmpty && returnsEmpty.textContent.trim()) returnsEmpty.textContent = bundle.noReturns || returnsEmpty.textContent;
    const achatsEmpty = document.querySelector('#achat-table td[colspan="5"]');
    if (achatsEmpty && achatsEmpty.textContent.trim()) achatsEmpty.textContent = bundle.noPurchases || achatsEmpty.textContent;
}

function stripEmojiText(text) {
    return String(text || '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F\u200D]/gu, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
}

function sanitizeUiEmojis() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
        const parent = node.parentElement;
        if (!parent) return;
        if (parent.closest('svg,symbol,script,style')) return;
        const clean = stripEmojiText(node.nodeValue);
        if (clean && clean !== node.nodeValue) node.nodeValue = clean;
    });
    document.querySelectorAll('input,textarea,button,[title]').forEach(el => {
        if (el.placeholder) {
            const cleanPlaceholder = stripEmojiText(el.placeholder);
            if (cleanPlaceholder) el.placeholder = cleanPlaceholder;
        }
        if (el.title) {
            const cleanTitle = stripEmojiText(el.title);
            if (cleanTitle) el.title = cleanTitle;
        }
        if (el.tagName === 'BUTTON' && !el.querySelector('svg')) {
            const cleaned = stripEmojiText(el.textContent);
            if (cleaned) {
                el.textContent = cleaned;
            } else if (el.getAttribute('onclick') === 'addAchatProduct()') {
                el.textContent = '+';
                el.setAttribute('aria-label', 'Ajouter');
                el.title = 'Ajouter';
            }
        }
    });
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('asil_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('lang-' + lang);
    if (btn) btn.classList.add('active');
    // Highlight login page buttons
    ['fr', 'en', 'ar'].forEach(l => {
        const lb = document.getElementById('login-lang-' + l);
        if (lb) {
            lb.style.background = l === lang ? 'rgba(46,204,113,0.3)' : 'rgba(255,255,255,0.08)';
            lb.style.borderColor = l === lang ? 'rgba(46,204,113,0.7)' : 'rgba(255,255,255,0.2)';
            lb.style.color = l === lang ? '#2ecc71' : 'rgba(255,255,255,0.7)';
        }
    });
    applyLang();
    scheduleIndexedSave();
}

function applyLang() {
    const tr = TRANSLATIONS[currentLang];
    const isRTL = currentLang === 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Apply text translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tr[key] !== undefined) el.textContent = tr[key];
    });

    // Apply placeholder translations
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (tr[key] !== undefined) el.placeholder = tr[key];
    });

    // Update tab titles object
    if (tr.tabTitles) {
        tabTitles.dashboard = stripEmojiText(tr.tabTitles.dashboard || (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).navDashboard) || tabTitles.dashboard;
        tabTitles.pos = stripEmojiText(tr.tabTitles.pos) || tabTitles.pos;
        tabTitles.retours = stripEmojiText(tr.tabTitles.retours) || tabTitles.retours;
        tabTitles.achat = stripEmojiText(tr.tabTitles.achat || (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).navAchat) || tabTitles.achat;
        tabTitles.inventaire = stripEmojiText(tr.tabTitles.inventaire) || tabTitles.inventaire;
        tabTitles.produits = stripEmojiText(tr.tabTitles.produits) || tabTitles.produits;
        tabTitles.clients = stripEmojiText(tr.tabTitles.clients) || tabTitles.clients;
        tabTitles.fournisseurs = stripEmojiText(tr.tabTitles.fournisseurs) || tabTitles.fournisseurs;
        tabTitles.calculatrice = stripEmojiText(tr.tabTitles.calculatrice || (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).navCalculator) || tabTitles.calculatrice;
        tabTitles.ventes = stripEmojiText(tr.tabTitles.ventes) || tabTitles.ventes;
        tabTitles.stats = stripEmojiText(tr.tabTitles.stats) || tabTitles.stats;
        tabTitles.parametres = stripEmojiText(tr.tabTitles.parametres || (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).navSettings) || tabTitles.parametres;
    }

    // Update active topbar title
    const activeTab = document.querySelector('.tab-pane.active');
    if (activeTab) {
        const tabName = activeTab.id.replace('tab-', '');
        const titleEl = document.getElementById('topbar-title');
        if (titleEl) titleEl.innerHTML = getTopbarTitleHtml(tabName);
    }

    // Update cart count text
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerHTML = cartLines.length + ' <span data-i18n="articles">' + tr.articles + '</span>';

    // Update select client placeholder
    const posClient = document.getElementById('pos-client');
    if (posClient && posClient.tagName === 'SELECT' && posClient.options[0]) posClient.options[0].text = tr.selectClient;

    // Update product select placeholder
    const retProduct = document.getElementById('ret-product');
    if (retProduct && retProduct.options[0]) retProduct.options[0].text = tr.selectOption;

    // Update voice recognition language
    if (typeof recognition !== 'undefined' && recognition) {
        recognition.lang = tr.lang || 'fr-FR';
    }

    // Re-render dynamic content if needed
    if (document.getElementById('tab-pos').classList.contains('active')) {
        const emptyCart = document.querySelector('#cart-items-list > div');
        if (emptyCart && cartLines.length === 0) emptyCart.textContent = tr.selectProducts;
    }

    // Static labels that are not bound with data-i18n attributes
    const loginPwLine = document.getElementById('login-default-pw-line');
    if (loginPwLine) {
        loginPwLine.innerHTML = `${tr.defaultPwLabel || 'Mot de passe par defaut :'} <strong style="color:rgba(255,255,255,0.6);">1234</strong>`;
    }
    const staticTextById = {
        'achat-title-text': ` ${tr.achatNewOrder || 'Nouveau Bon Achat'}`,
        'achat-cancel-btn': ` ${tr.cancel || 'Annuler'}`,
        'achat-supplier-label': tr.supplierLabel || 'Fournisseur',
        'achat-add-product-title': ` ${tr.addProduct || 'Ajouter un produit'}`,
        'achat-product-label': tr.productRefName || 'Produit (Ref. ou Nom)',
        'achat-qty-label': tr.qty || 'Quantite',
        'achat-price-label': tr.unitPriceDh || 'Prix Unit. DH',
        'achat-add-btn': (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).addProductShort || tr.addProduct || 'Ajouter le produit',
        'achat-total-label': ` ${tr.totalPurchases || 'TOTAL ACHATS'}`,
        'achat-save-btn': ` ${tr.saveUpper || tr.save || 'ENREGISTRER'}`,
        'achat-print-btn': ` ${tr.purchaseSlip || 'BON D\'ACHAT'}`,
        'achat-history-title': ` ${tr.purchaseHistory || 'Historique Achats'}`
    };
    Object.entries(staticTextById).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text.trim();
    });
    const achatBonLabel = document.getElementById('achat-bon-label');
    if (achatBonLabel) {
        achatBonLabel.innerHTML = `${tr.achatOrderRefLabel || 'N° de Bon'} <small style="color:var(--gray-600)">${tr.editableLabel || '(modifiable)'}</small>`;
    }
    const achatAddBtn = document.getElementById('achat-add-btn');
    if (achatAddBtn) {
        const addText = (MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).addProductShort || tr.addProduct || 'Ajouter le produit';
        achatAddBtn.title = addText;
        achatAddBtn.setAttribute('aria-label', addText);
    }

    applyManualUiTranslations();
    refreshTicketPreview();
    renderTrash();
    updateEraseZoneCounts();

    // Re-render dynamic dashboard strings (greeting/date/values) in active language
    renderDashboard();
    checkStockAlerts();

    sanitizeUiEmojis();
}

// ─── DATA ──────────────────────────────────────────────────
let APP_PW = localStorage.getItem('asil_pw') || '1234';
let ventesUnlocked = false;
let alphaSorted = false;
let payMode = 'especes';
let cartLines = [];
let currentImg = null;
let recognition = null;
let activeVoiceInput = null;
let activeVoiceCallback = null;

const DEFAULT_PRODUCTS = [
    { code: 'P001', name: 'Coca Cola 33cl', price: 10, stock: 100, unit: 'unité', image: null, threshold: 20 },
    { code: 'P002', name: 'Pain Complet', price: 4, stock: 50, unit: 'unité', image: null, threshold: 10 },
    { code: 'P003', name: 'Lait 1L', price: 12, stock: 80, unit: 'unité', image: null, threshold: 15 },
    { code: 'P004', name: 'Eau Minérale 1.5L', price: 5, stock: 200, unit: 'unité', image: null, threshold: 30 },
    { code: 'P005', name: 'Jus Orange', price: 15, stock: 8, unit: 'unité', image: null, threshold: 10 },
];

const STORAGE_VERSION = 1;
const IDB_DB_NAME = 'asil_offline_db';
const IDB_DB_VERSION = 1;
const IDB_STORE_NAME = 'app_state';
const IDB_STATE_KEY = 'main';
const IDB_MIGRATION_FLAG = 'asil_idb_migrated';
const FILE_SYNC_ENDPOINT = '/api/state';
let idbSaveTimer = null;
let fileSyncTimer = null;
let autoSaveInterval = null;
const AUTH_STORAGE_KEY = 'asil_auth';

function setSyncStatus(message) {
    const statusEl = document.getElementById('backup-last-status');
    if (statusEl) statusEl.textContent = message;
}

let clients = JSON.parse(localStorage.getItem('asil_clients')) || [];
let suppliers = JSON.parse(localStorage.getItem('asil_suppliers')) || [];
let products = JSON.parse(localStorage.getItem('asil_products')) || [...DEFAULT_PRODUCTS];
let sales = JSON.parse(localStorage.getItem('asil_sales')) || [];
let returns = JSON.parse(localStorage.getItem('asil_returns')) || [];
let invoiceCounter = parseInt(localStorage.getItem('asil_inv_counter'), 10) || 1;
let returnCounter = parseInt(localStorage.getItem('asil_ret_counter'), 10) || 1;
let achatCounter = parseInt(localStorage.getItem('asil_achat_counter'), 10) || 1;
let achats = JSON.parse(localStorage.getItem('asil_achats')) || [];
let operations = JSON.parse(localStorage.getItem('asil_operations')) || [];
let returnLines = [];
let achatLines = [];
let trash = JSON.parse(localStorage.getItem('asil_trash') || '[]');
let factures = JSON.parse(localStorage.getItem('asil_factures')) || [];
let factureCounter = parseInt(localStorage.getItem('asil_facture_counter'), 10) || 1;
let factureLines = [];
let bonCommandes = JSON.parse(localStorage.getItem('asil_boncommandes')) || [];
let bonCommandeCounter = parseInt(localStorage.getItem('asil_bc_counter'), 10) || 1;
let bonCommandeLines = [];
let bonLivraisons = JSON.parse(localStorage.getItem('asil_bonlivraisons')) || [];
let bonLivraisonCounter = parseInt(localStorage.getItem('asil_bl_counter'), 10) || 1;
let bonLivraisonLines = [];
let statsUnlocked = false;
let currentSoundType = localStorage.getItem('asil_sound') || 'beep';
let companyInfo = JSON.parse(localStorage.getItem('asil_company')) || { name: 'ASIL CAISSE', addr: '', tel: '' };
let logoData = localStorage.getItem('asil_logo') || null;
let signatureData = localStorage.getItem('asil_signature') || null;

function safeParseJson(raw, fallback) {
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (_) { return fallback; }
}

function toPositiveInt(value, fallback = 1) {
    const n = parseInt(value, 10);
    return Number.isFinite(n) && n > 0 ? n : fallback;
}

const ERASE_ZONES = ['ventes', 'retours', 'achats', 'operations'];

function getEraseBackupKey(zone) {
    return `asil_backup_zone_${zone}`;
}

function migrateLegacyEraseBackups(zone) {
    const legacyPrefix = `asil_backup_${zone}_`;
    const legacyKeys = Object.keys(localStorage).filter(k => k.startsWith(legacyPrefix));
    if (!legacyKeys.length) return;
    const current = safeParseJson(localStorage.getItem(getEraseBackupKey(zone)), []);
    const merged = Array.isArray(current) ? [...current] : [];
    legacyKeys.forEach(key => {
        const oldData = safeParseJson(localStorage.getItem(key), []);
        if (Array.isArray(oldData) && oldData.length) merged.push(...oldData);
        localStorage.removeItem(key);
    });
    writeEraseBackup(zone, merged);
}

function readEraseBackup(zone) {
    migrateLegacyEraseBackups(zone);
    return safeParseJson(localStorage.getItem(getEraseBackupKey(zone)), []);
}

function writeEraseBackup(zone, entries) {
    localStorage.setItem(getEraseBackupKey(zone), JSON.stringify(Array.isArray(entries) ? entries : []));
}

function clearEraseBackup(zone) {
    localStorage.removeItem(getEraseBackupKey(zone));
}

function getAllEraseBackups() {
    const out = {};
    ERASE_ZONES.forEach(zone => {
        out[zone] = readEraseBackup(zone);
    });
    return out;
}

function getStateSnapshot() {
    return {
        meta: {
            version: STORAGE_VERSION,
            savedAt: new Date().toISOString()
        },
        data: {
            APP_PW,
            currentLang,
            currentSoundType,
            clients,
            suppliers,
            products,
            sales,
            returns,
            achats,
            operations,
            trash,
            eraseBackups: getAllEraseBackups(),
            invoiceCounter,
            returnCounter,
            achatCounter,
            factures,
            factureCounter,
            bonCommandes,
            bonCommandeCounter,
            bonLivraisons,
            bonLivraisonCounter,
            companyInfo,
            logoData,
            signatureData,
            color: localStorage.getItem('asil_color') || '#22a355',
            theme: localStorage.getItem('asil_theme') || 'matin'
        }
    };
}

function applySnapshot(snapshot) {
    if (!snapshot || !snapshot.data) return false;
    const d = snapshot.data;
    APP_PW = typeof d.APP_PW === 'string' && d.APP_PW ? d.APP_PW : APP_PW;
    currentLang = typeof d.currentLang === 'string' && d.currentLang ? d.currentLang : currentLang;
    currentSoundType = typeof d.currentSoundType === 'string' && d.currentSoundType ? d.currentSoundType : currentSoundType;
    clients = Array.isArray(d.clients) ? d.clients : [];
    suppliers = Array.isArray(d.suppliers) ? d.suppliers : [];
    products = Array.isArray(d.products) && d.products.length ? d.products : [...DEFAULT_PRODUCTS];
    sales = Array.isArray(d.sales) ? d.sales : [];
    returns = Array.isArray(d.returns) ? d.returns : [];
    achats = Array.isArray(d.achats) ? d.achats : [];
    operations = Array.isArray(d.operations) ? d.operations : [];
    trash = Array.isArray(d.trash) ? d.trash : [];
    invoiceCounter = toPositiveInt(d.invoiceCounter, 1);
    returnCounter = toPositiveInt(d.returnCounter, 1);
    achatCounter = toPositiveInt(d.achatCounter, 1);
    factures = Array.isArray(d.factures) ? d.factures : [];
    factureCounter = toPositiveInt(d.factureCounter, 1);
    bonCommandes = Array.isArray(d.bonCommandes) ? d.bonCommandes : [];
    bonCommandeCounter = toPositiveInt(d.bonCommandeCounter, 1);
    bonLivraisons = Array.isArray(d.bonLivraisons) ? d.bonLivraisons : [];
    bonLivraisonCounter = toPositiveInt(d.bonLivraisonCounter, 1);
    companyInfo = d.companyInfo && typeof d.companyInfo === 'object' ? d.companyInfo : { name: 'ASIL CAISSE', addr: '', tel: '' };
    logoData = typeof d.logoData === 'string' ? d.logoData : null;
    signatureData = typeof d.signatureData === 'string' ? d.signatureData : null;
    if (d.eraseBackups && typeof d.eraseBackups === 'object') {
        ERASE_ZONES.forEach(zone => writeEraseBackup(zone, d.eraseBackups[zone]));
    }
    if (d.color) localStorage.setItem('asil_color', d.color);
    if (d.theme) localStorage.setItem('asil_theme', d.theme);
    localStorage.setItem('asil_lang', currentLang);
    localStorage.setItem('asil_sound', currentSoundType);
    localStorage.setItem('asil_pw', APP_PW);
    localStorage.setItem('asil_company', JSON.stringify(companyInfo));
    if (logoData) localStorage.setItem('asil_logo', logoData);
    else localStorage.removeItem('asil_logo');
    if (signatureData) localStorage.setItem('asil_signature', signatureData);
    else localStorage.removeItem('asil_signature');
    return true;
}

function openOfflineDb() {
    return new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) {
            reject(new Error('IndexedDB unavailable'));
            return;
        }
        const req = indexedDB.open(IDB_DB_NAME, IDB_DB_VERSION);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains(IDB_STORE_NAME)) {
                db.createObjectStore(IDB_STORE_NAME);
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error('IndexedDB open failed'));
    });
}

async function readIndexedState() {
    try {
        const db = await openOfflineDb();
        return await new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE_NAME, 'readonly');
            const st = tx.objectStore(IDB_STORE_NAME);
            const req = st.get(IDB_STATE_KEY);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => reject(req.error || new Error('IndexedDB read failed'));
        });
    } catch (_) {
        return null;
    }
}

async function writeIndexedState(snapshot) {
    try {
        const db = await openOfflineDb();
        await new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE_NAME, 'readwrite');
            const st = tx.objectStore(IDB_STORE_NAME);
            st.put(snapshot, IDB_STATE_KEY);
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error || new Error('IndexedDB write failed'));
            tx.onabort = () => reject(tx.error || new Error('IndexedDB write aborted'));
        });
        return true;
    } catch (_) {
        return false;
    }
}

function buildLegacySnapshot() {
    return {
        meta: { version: STORAGE_VERSION, savedAt: new Date().toISOString(), source: 'legacy-localStorage' },
        data: {
            APP_PW: localStorage.getItem('asil_pw') || APP_PW,
            currentLang: localStorage.getItem('asil_lang') || currentLang,
            currentSoundType: localStorage.getItem('asil_sound') || currentSoundType,
            clients: safeParseJson(localStorage.getItem('asil_clients'), []),
            suppliers: safeParseJson(localStorage.getItem('asil_suppliers'), []),
            products: safeParseJson(localStorage.getItem('asil_products'), [...DEFAULT_PRODUCTS]),
            sales: safeParseJson(localStorage.getItem('asil_sales'), []),
            returns: safeParseJson(localStorage.getItem('asil_returns'), []),
            achats: safeParseJson(localStorage.getItem('asil_achats'), []),
            operations: safeParseJson(localStorage.getItem('asil_operations'), []),
            trash: safeParseJson(localStorage.getItem('asil_trash'), []),
            eraseBackups: getAllEraseBackups(),
            invoiceCounter: toPositiveInt(localStorage.getItem('asil_inv_counter'), 1),
            returnCounter: toPositiveInt(localStorage.getItem('asil_ret_counter'), 1),
            achatCounter: toPositiveInt(localStorage.getItem('asil_achat_counter'), 1),
            companyInfo: safeParseJson(localStorage.getItem('asil_company'), { name: 'ASIL CAISSE', addr: '', tel: '' }),
            logoData: localStorage.getItem('asil_logo') || null,
            signatureData: localStorage.getItem('asil_signature') || null,
            color: localStorage.getItem('asil_color') || '#22a355',
            theme: localStorage.getItem('asil_theme') || 'matin'
        }
    };
}

async function hydrateDataStorage() {
    const fileState = await readFileSyncedState();
    if (fileState && applySnapshot(fileState)) {
        return;
    }
    const indexedState = await readIndexedState();
    if (indexedState && applySnapshot(indexedState)) {
        return;
    }
    const legacySnapshot = buildLegacySnapshot();
    applySnapshot(legacySnapshot);
    const migrated = localStorage.getItem(IDB_MIGRATION_FLAG) === '1';
    if (!migrated) {
        const ok = await writeIndexedState(legacySnapshot);
        if (ok) localStorage.setItem(IDB_MIGRATION_FLAG, '1');
    }
}

function scheduleIndexedSave(syncFile = true) {
    clearTimeout(idbSaveTimer);
    idbSaveTimer = setTimeout(async() => {
        const ok = await writeIndexedState(getStateSnapshot());
        if (ok) {
            setSyncStatus(`${mt('syncLocalSaved', 'Sauvegarde locale synchronisee:')} ${new Date().toLocaleString(t('lang') || 'fr-FR')}`);
        }
    }, 180);
    if (syncFile) scheduleFileSync();
}

async function readFileSyncedState() {
    try {
        const res = await fetch(FILE_SYNC_ENDPOINT, { cache: 'no-store' });
        if (!res.ok) return null;
        const data = await res.json();
        if (!data || !data.data) return null;
        return data;
    } catch (_) {
        return null;
    }
}

async function writeFileSyncedState(snapshot) {
    try {
        const res = await fetch(FILE_SYNC_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(snapshot),
            keepalive: true
        });
        if (!res.ok) {
            setSyncStatus(mt('syncFileFailed', 'Synchronisation fichier echouee (serveur local indisponible)'));
            return false;
        }
        return res.ok;
    } catch (_) {
        setSyncStatus(mt('syncFileOffline', 'Synchronisation fichier impossible (hors ligne)'));
        return false;
    }
}

function scheduleFileSync() {
    clearTimeout(fileSyncTimer);
    fileSyncTimer = setTimeout(async() => {
        const ok = await writeFileSyncedState(getStateSnapshot());
        if (ok) {
            setSyncStatus(`${mt('syncSavedInFolder', 'Etat enregistre dans le dossier de l\'application:')} ${new Date().toLocaleString(t('lang') || 'fr-FR')}`);
        }
    }, 260);
}

function save() {
    localStorage.setItem('asil_clients', JSON.stringify(clients));
    localStorage.setItem('asil_suppliers', JSON.stringify(suppliers));
    localStorage.setItem('asil_products', JSON.stringify(products));
    localStorage.setItem('asil_sales', JSON.stringify(sales));
    localStorage.setItem('asil_returns', JSON.stringify(returns));
    localStorage.setItem('asil_inv_counter', invoiceCounter);
    localStorage.setItem('asil_ret_counter', returnCounter);
    localStorage.setItem('asil_achats', JSON.stringify(achats));
    localStorage.setItem('asil_achat_counter', achatCounter);
    localStorage.setItem('asil_operations', JSON.stringify(operations));
    localStorage.setItem('asil_trash', JSON.stringify(trash));
    localStorage.setItem('asil_factures', JSON.stringify(factures));
    localStorage.setItem('asil_facture_counter', factureCounter);
    localStorage.setItem('asil_boncommandes', JSON.stringify(bonCommandes));
    localStorage.setItem('asil_bc_counter', bonCommandeCounter);
    localStorage.setItem('asil_bonlivraisons', JSON.stringify(bonLivraisons));
    localStorage.setItem('asil_bl_counter', bonLivraisonCounter);
    localStorage.setItem('asil_lang', currentLang);
    localStorage.setItem('asil_sound', currentSoundType);
    localStorage.setItem('asil_pw', APP_PW);
    localStorage.setItem('asil_company', JSON.stringify(companyInfo));
    if (logoData) localStorage.setItem('asil_logo', logoData);
    else localStorage.removeItem('asil_logo');
    if (signatureData) localStorage.setItem('asil_signature', signatureData);
    else localStorage.removeItem('asil_signature');
    scheduleIndexedSave();
}

// ─── AUTH ──────────────────────────────────────────────────
function doLogin() {
    const pwInput = document.getElementById('pw-input');
    const pw = pwInput && typeof pwInput.value === 'string' ? pwInput.value : '';
    if (pw !== APP_PW) {
        const e = document.getElementById('login-error');
        if (e) {
            e.textContent = t('pwWrong');
            e.style.display = 'block';
        }
        if (document.getElementById('pw-input')) document.getElementById('pw-input').value = '';
        return;
    }
    const e = document.getElementById('login-error');
    if (e) e.style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app').classList.add('active');
    localStorage.setItem(AUTH_STORAGE_KEY, '1');
    sessionStorage.setItem(AUTH_STORAGE_KEY, '1');
    if (document.getElementById('pw-input')) document.getElementById('pw-input').value = '';
    applyLang();
}

function doLogout() {
    if (!confirm(t('logoutConfirm'))) return;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    ventesUnlocked = false;
    statsUnlocked = false;
    paramUnlocked = false;
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('app').classList.remove('active');
    cartLines = [];
}

function checkAuth() {
    const isAuth = localStorage.getItem(AUTH_STORAGE_KEY) === '1' || sessionStorage.getItem(AUTH_STORAGE_KEY) === '1';
    if (isAuth) {
        localStorage.setItem(AUTH_STORAGE_KEY, '1');
        sessionStorage.setItem(AUTH_STORAGE_KEY, '1');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app').classList.add('active');
    } else {
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('app').classList.remove('active');
    }
    setTimeout(applyLang, 0);
}

// ─── TABS ──────────────────────────────────────────────────
const tabTitles = {
    dashboard: 'Tableau de Bord',
    pos: 'Point de Vente',
    retours: 'Retours',
    achat: 'Point d\'Achat',
    inventaire: 'Inventaire',
    produits: 'Produits',
    clients: 'Clients',
    fournisseurs: 'Fournisseurs',
    calculatrice: 'Calculatrice',
    ventes: 'Historique Ventes',
    stats: 'Statistiques',
    parametres: 'Paramètres',
    factures: 'Facturation',
    boncommande: 'Bon de Commande',
    bonlivraison: 'Bon de Livraison'
};
const tabIcons = {
    dashboard: 'i-home',
    pos: 'i-cart',
    retours: 'i-return',
    achat: 'i-bag',
    inventaire: 'i-chart',
    produits: 'i-box',
    clients: 'i-users',
    fournisseurs: 'i-factory',
    calculatrice: 'i-calc',
    ventes: 'i-file',
    stats: 'i-trend',
    parametres: 'i-settings',
    factures: 'i-invoice',
    boncommande: 'i-clipboard',
    bonlivraison: 'i-truck'
};

function getTopbarTitleHtml(tabName) {
    const iconId = tabIcons[tabName] || 'i-file';
    const title = tabTitles[tabName] || tabName || '';
    return `<svg class="icon-svg" style="width:18px;height:18px;margin-right:6px;"><use href="#${iconId}"></use></svg><span>${title}</span>`;
}
let paramUnlocked = false;

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar || !backdrop) return;
    const shouldOpen = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', shouldOpen);
    backdrop.classList.toggle('show', shouldOpen);
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
}

function showTab(name, el) {
    playBeep('tap');
    document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const tabEl = document.getElementById('tab-' + name);
    if (!tabEl) return;
    tabEl.classList.add('active');
    if (el) el.classList.add('active');
    const titleEl = document.getElementById('topbar-title');
    if (titleEl) titleEl.innerHTML = getTopbarTitleHtml(name);
    if (name === 'inventaire') renderInventory();
    if (name === 'stats') {
        if (statsUnlocked) {
            document.getElementById('stats-lock').style.display = 'none';
            document.getElementById('stats-content').style.display = 'block';
        }
        renderStats();
    }
    if (name === 'produits') renderProductTable();
    if (name === 'clients') renderClientsTable();
    if (name === 'fournisseurs') renderSuppliersTable();
    if (name === 'ventes' && ventesUnlocked) renderSalesTable();
    if (name === 'retours') {
        renderReturnsHistory();
        initReturnForm();
    }
    if (name === 'achat') {
        initAchatForm();
        renderAchatTable();
    }
    if (name === 'factures') {
        initFactureForm();
        renderFactureTable();
    }
    if (name === 'boncommande') {
        initBonCommandeForm();
        renderBonCommandeTable();
    }
    if (name === 'bonlivraison') {
        initBonLivraisonForm();
        renderBonLivraisonTable();
    }
    if (name === 'dashboard') renderDashboard();
    if (name === 'parametres') {
        if (!paramUnlocked) {
            document.getElementById('param-lock').style.display = 'flex';
            document.getElementById('param-content').style.display = 'none';
        } else { initParamForm(); }
    }
    const dashBtn = document.getElementById('btn-back-dashboard');
    if (dashBtn) dashBtn.style.display = (name === 'dashboard') ? 'none' : 'block';
    applyManualUiTranslations();
    if (window.innerWidth <= 900) closeSidebar();
}

function unlockParam() {
    if (document.getElementById('param-lock-pw').value === APP_PW) {
        paramUnlocked = true;
        document.getElementById('param-lock').style.display = 'none';
        document.getElementById('param-content').style.display = 'block';
        initParamForm();
    } else { showAlert(t('alertPwIncorrect'), 'danger'); }
    document.getElementById('param-lock-pw').value = '';
}

// ─── CLOCK ────────────────────────────────────────────────
function updateClock() {
    const now = new Date();
    const locale = t('lang') || 'fr-FR';
    const d = now.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const time = now.toLocaleTimeString(locale);
    document.getElementById('sidebar-clock').textContent = d + ' ' + time;
}

// ─── VOICE SEARCH ─────────────────────────────────────────
function startVoice(inputId, callback) {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showAlert(t('alertVoiceNotSupported'), 'danger');
        return;
    }
    if (recognition) { recognition.stop(); }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.lang = t('lang') || 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;

    const btn = document.getElementById('voice-btn-' + inputId.replace('pos-search', 'pos'));
    if (btn) {
        btn.classList.add('listening');
        btn.innerHTML = '<svg class="icon-svg"><use href="#i-alert"></use></svg>';
    }

    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        document.getElementById(inputId).value = transcript;
        if (callback) callback();
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '<svg class="icon-svg"><use href="#i-mic"></use></svg>';
        }
    };
    recognition.onerror = () => {
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '<svg class="icon-svg"><use href="#i-mic"></use></svg>';
        }
    };
    recognition.onend = () => {
        if (btn) {
            btn.classList.remove('listening');
            btn.innerHTML = '<svg class="icon-svg"><use href="#i-mic"></use></svg>';
        }
    };
    recognition.start();
}

// Auto voice: detect speech activity via SpeechRecognition continuous mode
// (activated by mic icon — no need for passive always-on in browser)

// ─── ALPHA SORT ────────────────────────────────────────────
let posView = 'grid';
let posCategory = '';

function setView(v) {
    posView = v;
    document.getElementById('view-grid-btn').classList.toggle('active', v === 'grid');
    document.getElementById('view-list-btn').classList.toggle('active', v === 'list');
    document.getElementById('pos-product-grid').className = 'product-grid' + (v === 'list' ? ' list-view' : '');
    renderPosGrid(document.getElementById('pos-search').value.trim().toLowerCase());
}

function setPosCategory(el, cat) {
    posCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    renderPosGrid(document.getElementById('pos-search').value.trim().toLowerCase());
}

function buildCategories() {
    const cats = [...new Set(products.map(p => p.category || '').filter(Boolean))];
    const bar = document.getElementById('pos-categories');
    if (!bar) return;
    bar.innerHTML = `<button class="cat-btn active" data-cat="" onclick="setPosCategory(this,'')">🌐 ${t('all')||'Tous'}</button>` +
        cats.map(c => `<button class="cat-btn" data-cat="${c}" onclick="setPosCategory(this,'${c}')">${c}</button>`).join('');
}

function toggleAlphaSort() {
    alphaSorted = !alphaSorted;
    const btn = document.getElementById('sort-alpha-btn');
    btn.classList.toggle('active', alphaSorted);
    btn.textContent = alphaSorted ? 'Z→A' : 'A→Z';
    renderPosGrid();
}

// ─── POS SEARCH ───────────────────────────────────────────
function posSearch() {
    renderPosGrid(document.getElementById('pos-search').value.trim().toLowerCase());
}

function renderPosGrid(query = '') {
    let list = [...products];
    if (query) list = list.filter(p => p.name.toLowerCase().includes(query) || p.code.toLowerCase().includes(query));
    if (posCategory) list = list.filter(p => (p.category || '') === posCategory);
    if (alphaSorted) list = list.slice().sort((a, b) => b.name.localeCompare(a.name));
    else list = list.slice().sort((a, b) => a.name.localeCompare(b.name));

    const grid = document.getElementById('pos-product-grid');
    grid.className = 'product-grid' + (posView === 'list' ? ' list-view' : '');
    if (list.length === 0) { grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-600);">' + t('noProductFound') + '</div>'; return; }

    if (posView === 'list') {
        grid.innerHTML = list.map(p => {
                    let stockClass = 'stock-ok',
                        stockTxt = `✓ ${p.stock} ${p.unit}`;
                    if (p.stock <= 0) {
                        stockClass = 'stock-out';
                        stockTxt = t('outStock');
                    } else if (p.stock <= (p.threshold || 10)) {
                        stockClass = 'stock-low';
                        stockTxt = `${p.stock} ${p.unit}`;
                    }
                    const img = p.image ? `<img src="${p.image}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><svg class="icon-svg" style="width:20px;height:20px;"><use href="#i-box"></use></svg></div>`;
                    return `<div class="product-card ${p.stock<=0?'out-stock':''}" onclick="${p.stock>0?`addToCart('${p.code}')`:''}" >
        <div class="product-img">${img}</div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-code">${p.code}</div>
        </div>
        <div style="margin-left:auto;display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
          <div class="product-price">${p.price.toFixed(2)} DH</div>
          <span class="stock-badge ${stockClass}">${stockTxt}</span>
        </div>
      </div>`;
    }).join('');
  } else {
    grid.innerHTML = list.map(p=>{
      let stockClass='stock-ok', stockTxt=`✓ ${p.stock} ${p.unit}`;
      if(p.stock<=0){ stockClass='stock-out'; stockTxt=t('outStock'); }
      else if(p.stock<=(p.threshold||10)){ stockClass='stock-low'; stockTxt=`${p.stock} ${p.unit}`; }
      const img = p.image ? `<img src="${p.image}" style="width:100%;height:90px;object-fit:cover;border-radius:8px;margin-bottom:8px;">` : `<div class="product-img" style="height:80px;"><svg class="icon-svg" style="width:28px;height:28px;"><use href="#i-box"></use></svg></div>`;
      return `<div class="product-card ${p.stock<=0?'out-stock':''}" onclick="${p.stock>0?`addToCart('${p.code}')`:''}" >
        ${img}
        <div class="product-code">${p.code}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price.toFixed(2)} DH</div>
        <span class="stock-badge ${stockClass}">${stockTxt}</span>
      </div>`;
    }).join('');
  }
}

// ─── CART ──────────────────────────────────────────────────
// ─── BEEP SOUND ────────────────────────────────────────────
function playBeep(type) {
  const sType = type || currentSoundType;
  if(sType==='mute') return;
  try {
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    if(sType==='double') {
      [0,0.22].forEach(d=>{const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=1046;g.gain.setValueAtTime(0.25,ctx.currentTime+d);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d+0.15);o.start(ctx.currentTime+d);o.stop(ctx.currentTime+d+0.15);});
    } else if(sType==='success') {
      [[660,0],[880,0.11],[1046,0.22]].forEach(([f,d])=>{const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0.18,ctx.currentTime+d);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d+0.14);o.start(ctx.currentTime+d);o.stop(ctx.currentTime+d+0.14);});
    } else if(sType==='warn') {
      [[440,0],[392,0.16]].forEach(([f,d])=>{const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='square';o.frequency.value=f;g.gain.setValueAtTime(0.16,ctx.currentTime+d);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d+0.16);o.start(ctx.currentTime+d);o.stop(ctx.currentTime+d+0.16);});
    } else if(sType==='delete') {
      const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sawtooth';o.frequency.setValueAtTime(520,ctx.currentTime);o.frequency.exponentialRampToValueAtTime(180,ctx.currentTime+0.22);g.gain.setValueAtTime(0.14,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.24);o.start(ctx.currentTime);o.stop(ctx.currentTime+0.24);
    } else if(sType==='tap') {
      const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=1200;g.gain.setValueAtTime(0.08,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.06);o.start(ctx.currentTime);o.stop(ctx.currentTime+0.06);
    } else if(sType==='melody') {
      [[523,0],[659,0.18],[784,0.36]].forEach(([f,d])=>{const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0.2,ctx.currentTime+d);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d+0.16);o.start(ctx.currentTime+d);o.stop(ctx.currentTime+d+0.16);});
    } else {
      const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sine';o.frequency.value=880;g.gain.setValueAtTime(0.3,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.18);o.start(ctx.currentTime);o.stop(ctx.currentTime+0.18);
    }
  } catch(e){}
}
function testSound(t){playBeep(t);}
function setSoundType(t){currentSoundType=t;localStorage.setItem('asil_sound',t);scheduleIndexedSave();}

function addToCart(code) {
  const p = products.find(x=>x.code===code);
  if(!p||p.stock<=0){ showAlert(t('alertOutOfStock'),'danger'); return; }
  const customQty = parseFloat(document.getElementById('pos-custom-qty')?.value)||1;
  const customPrice = parseFloat(document.getElementById('pos-custom-price')?.value)||null;
  const usePrice = customPrice !== null && customPrice > 0 ? customPrice : p.price;
  const ex = cartLines.find(l=>l.code===code);
  if(ex) {
    const newQty = ex.qty + customQty;
    if(newQty>p.stock){ showAlert(t('alertInsufficientStock'),'danger'); return; }
    ex.qty=newQty; ex.price=usePrice; ex.total=usePrice*ex.qty*(1-ex.disc/100);
  } else {
    if(customQty>p.stock){ showAlert(t('alertInsufficientStock'),'danger'); return; }
    cartLines.push({code,name:p.name,price:usePrice,qty:customQty,unit:p.unit,disc:0,total:usePrice*customQty});
  }
  playBeep();
  renderCart();
  // reset qty to 1 but keep price
  if(document.getElementById('pos-custom-qty')) document.getElementById('pos-custom-qty').value=1;
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  document.getElementById('cart-count').textContent = cartLines.length + ' ' + t('articles');
  if(cartLines.length===0){
    list.innerHTML='<div style="text-align:center;padding:30px;color:var(--gray-600);font-size:14px;">'+t('selectProducts')+'</div>';
    updateCartTotals();
    applyManualUiTranslations();
    return;
  }
  const rows = cartLines.map((l,i)=>`
    <tr>
      <td>
        <div style="font-weight:700;font-size:12px;line-height:1.3;">${l.name}</div>
        <div style="font-size:10px;color:var(--gray-600);">${l.code}</div>
      </td>
      <td>
        <input type="number" class="ct-input" value="${l.qty}" min="0.01" step="0.01"
          onchange="setQty(${i},this.value)" style="width:54px;">
        <div style="font-size:9px;color:var(--gray-600);margin-top:2px;">${l.unit}</div>
      </td>
      <td>
        <input type="number" class="ct-input" value="${l.price.toFixed(2)}" min="0" step="0.01"
          onchange="setPrice(${i},this.value)" style="width:64px;">
        <div style="font-size:9px;color:var(--gray-600);margin-top:2px;">DH/u</div>
      </td>
      <td>
        <input type="number" class="ct-input" value="${l.disc}" min="0" max="100" step="0.5"
          onchange="setDisc(${i},this.value)" style="width:44px;">
        <div style="font-size:9px;color:var(--gray-600);margin-top:2px;">%</div>
      </td>
      <td class="ct-total-cell">${l.total.toFixed(2)}<div style="font-size:9px;font-weight:400;color:var(--gray-600);">DH</div></td>
      <td><button class="ct-del" onclick="removeLine(${i})">✕</button></td>
    </tr>`).join('');
  list.innerHTML = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Désignation</th>
          <th>Qté</th>
          <th>P.U.</th>
          <th>Rem.</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
  updateCartTotals();
  applyManualUiTranslations();
}

function setQty(i, v) {
  const q = parseFloat(v)||0;
  if(q<=0){ removeLine(i); return; }
  const p = products.find(x=>x.code===cartLines[i].code);
  if(p && q>p.stock){ showAlert(`❌ Stock max: ${p.stock}`,'danger'); return; }
  cartLines[i].qty=q; cartLines[i].total=cartLines[i].price*q*(1-cartLines[i].disc/100); renderCart();
}
function setPrice(i, v) {
  const pr = parseFloat(v)||0;
  cartLines[i].price=pr; cartLines[i].total=pr*cartLines[i].qty*(1-cartLines[i].disc/100); renderCart();
}

function changeQty(i, delta) {
  const p = products.find(x=>x.code===cartLines[i].code);
  const newQty = cartLines[i].qty + delta;
  if(newQty<1){ removeLine(i); return; }
  if(p && newQty>p.stock){ showAlert(`❌ Stock max: ${p.stock}`,'danger'); return; }
  cartLines[i].qty = newQty;
  cartLines[i].total = cartLines[i].price * newQty * (1-cartLines[i].disc/100);
  renderCart();
}
function setDisc(i,v){ cartLines[i].disc=parseFloat(v)||0; cartLines[i].total=cartLines[i].price*cartLines[i].qty*(1-cartLines[i].disc/100); renderCart(); }
function removeLine(i){ cartLines.splice(i,1); renderCart(); }

function updateCartTotals() {
  let sub=0,disc=0;
  cartLines.forEach(l=>{ const ls=l.price*l.qty; sub+=ls; disc+=ls*(l.disc/100); });
  const total=sub-disc;
  document.getElementById('ct-sub').textContent=sub.toFixed(2)+' DH';
  document.getElementById('ct-disc').textContent=disc.toFixed(2)+' DH';
  document.getElementById('ct-total').textContent=total.toFixed(2)+' DH';
  calcChange();
}
function calcChange() {
  const total=parseFloat(document.getElementById('ct-total').textContent)||0;
  const rec=parseFloat(document.getElementById('pos-received').value)||0;
  document.getElementById('pos-change').textContent=(rec-total).toFixed(2)+' DH';
}
function clearCart() {
  cartLines=[];
  document.getElementById('pos-received').value='';
  const fn=document.getElementById('pos-free-name'); if(fn)fn.value='';
  const fp=document.getElementById('pos-free-phone'); if(fp)fp.value='';
  renderCart();
}
function setPayMode(m) {
  payMode=m;
  ['especes','credit','cheque','virement'].forEach(pm=>{
    const btn=document.getElementById('pay-'+pm);
    if(btn) btn.classList.toggle('active', pm===m);
  });
  document.getElementById('cash-block').style.display=(m==='especes'||m==='cheque'||m==='virement')?'block':'none';
  document.getElementById('credit-block').style.display=m==='credit'?'block':'none';
}
function onClientChange(){}

function getClientDisplayCode(client) {
  if(!client) return '';
  return String(client.code || client.id || '').toUpperCase();
}

function generateClientCode() {
  const max = clients.reduce((acc, c) => {
    const match = String(c.code || '').match(/^CL[-\s]?(\d+)$/i);
    if(!match) return acc;
    const n = parseInt(match[1], 10);
    return Number.isFinite(n) ? Math.max(acc, n) : acc;
  }, 0);
  return 'CL' + String(max + 1).padStart(4, '0');
}

function isInitialCreditOperation(op) {
  if(!op || op.type !== 'vente') return false;
  return op.isInitialCredit === true ||
    op.reference === 'Crédit initial' ||
    op.reference === 'Credit initial' ||
    op.reference === 'Initial credit';
}

function getClientInitialCredit(clientId) {
  return operations
    .filter(o => o.clientId === clientId && isInitialCreditOperation(o))
    .reduce((sum, o) => sum + (parseFloat(o.montant) || 0), 0);
}

function upsertClientInitialCredit(clientId, amount) {
  const target = Math.max(0, parseFloat(amount) || 0);
  const indexes = [];
  operations.forEach((op, idx) => {
    if(op.clientId === clientId && isInitialCreditOperation(op)) indexes.push(idx);
  });

  if(target <= 0) {
    for(let i = indexes.length - 1; i >= 0; i--) operations.splice(indexes[i], 1);
    return;
  }

  const nowIso = new Date().toISOString();
  if(!indexes.length) {
    operations.push({
      id: 'OP' + Date.now(),
      clientId,
      type: 'vente',
      montant: target,
      date: nowIso,
      reference: 'Crédit initial',
      payMode: 'credit',
      isInitialCredit: true
    });
    return;
  }

  const firstIdx = indexes[0];
  operations[firstIdx] = {
    ...operations[firstIdx],
    montant: target,
    date: operations[firstIdx].date || nowIso,
    reference: 'Crédit initial',
    payMode: 'credit',
    isInitialCredit: true
  };
  for(let i = indexes.length - 1; i >= 1; i--) operations.splice(indexes[i], 1);
}

function filterClientDropdown() {
  const q = document.getElementById('pos-client-search').value.toLowerCase().trim();
  const matches = clients.filter(c=>
    c.name.toLowerCase().includes(q) ||
    (c.phone||'').includes(q) ||
    getClientDisplayCode(c).toLowerCase().includes(q)
  );
  renderClientDropdown(matches, q);
}
function showClientDropdown() {
  const q = document.getElementById('pos-client-search').value.toLowerCase().trim();
  renderClientDropdown(clients.filter(c=>
    c.name.toLowerCase().includes(q) ||
    (c.phone||'').includes(q) ||
    getClientDisplayCode(c).toLowerCase().includes(q)
  ), q);
  document.getElementById('client-dropdown').style.display='block';
}
function hideClientDropdown() {
  document.getElementById('client-dropdown').style.display='none';
}
function renderClientDropdown(list, q) {
  const dd = document.getElementById('client-dropdown');
  let html = list.slice(0,8).map(c=>`
    <div onclick="selectPosClient('${c.id}')" style="padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-size:13px;"
      onmouseover="this.style.background='#f0faf4'" onmouseout="this.style.background='#fff'">
      <strong>${c.name}</strong>${getClientDisplayCode(c)?' <span style="color:#888;font-size:11px;">• '+getClientDisplayCode(c)+'</span>':''}${c.phone?' <span style="color:#888;font-size:11px;">• '+c.phone+'</span>':''}
    </div>`).join('');
  // Option to add new client quickly
  if(q && !clients.find(c=>c.name.toLowerCase()===q)) {
    html += `<div onclick="quickAddClient('${q}')" style="padding:8px 12px;cursor:pointer;background:#e8f5e9;font-size:13px;font-weight:700;color:#2e7d32;">
      + ${(MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).addClientFromSearch.replace('{name}', q)}
    </div>`;
  }
  if(!html) html=`<div style="padding:10px 12px;color:#888;font-size:12px;">${(MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).noClientFound}</div>`;
  html = `<div onclick="selectPosClient('')" style="padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;" onmouseover="this.style.background='#f9f9f9'" onmouseout="this.style.background='#fff'">${(MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr).noClientShort}</div>` + html;
  dd.innerHTML = html;
  dd.style.display='block';
}
function selectPosClient(id) {
  document.getElementById('pos-client').value = id;
  const c = clients.find(x=>x.id===id);
  const search = document.getElementById('pos-client-search');
  const info = document.getElementById('pos-client-info');
  // Clear free client fields when selecting registered client
  if(id) {
    const fn=document.getElementById('pos-free-name'); if(fn)fn.value='';
    const fp=document.getElementById('pos-free-phone'); if(fp)fp.value='';
  }
  if(c) {
    search.value = c.name;
    const {ventes,paie,rets,credit} = getClientCredit(c.id);
    let infoHtml = `<strong>${c.name}</strong>`;
    if(getClientDisplayCode(c)) infoHtml += ` • 🏷️ ${getClientDisplayCode(c)}`;
    if(c.phone) infoHtml += ` • 📞 ${c.phone}`;
    if(c.address) infoHtml += `<br>📍 ${c.address}`;
    if(credit>0) infoHtml += `<br>💸 Crédit dû : <strong style="color:#ffcc00;">${credit.toFixed(2)} DH</strong>`;
    info.innerHTML = infoHtml;
    info.style.display='block';
  } else {
    search.value='';
    info.style.display='none';
  }
  document.getElementById('client-dropdown').style.display='none';
}
function quickAddClient(name) {
  clients.push({
    id:'CLI'+Date.now(),
    code: generateClientCode(),
    name,
    phone:'',
    address:'',
    paymode:'any',
    entryDate:new Date().toISOString().split('T')[0],
    amountDue:0,
    purchases:[]
  });
  save(); loadClientOptions(); renderClientsTable();
  const newC = clients[clients.length-1];
  selectPosClient(newC.id);
  showAlert(`✅ Client "${name}" ajouté`,'success');
}

function onFreeClientInput() {
  // When typing free name, clear the selected registered client
  const name = document.getElementById('pos-free-name').value.trim();
  if(name) {
    document.getElementById('pos-client').value = '';
    document.getElementById('pos-client-search').value = '';
    document.getElementById('pos-client-info').style.display = 'none';
  }
}

function getPosClientInfo() {
  // Returns {id, name, phone, isNew}
  const clientId = document.getElementById('pos-client').value;
  const freeName = document.getElementById('pos-free-name')?.value.trim()||'';
  const freePhone = document.getElementById('pos-free-phone')?.value.trim()||'';
  if(clientId) {
    const c = clients.find(x=>x.id===clientId);
    return c ? {id:c.id, name:c.name, phone:c.phone||'', isNew:false} : {id:'', name:'', phone:'', isNew:false};
  }
  if(freeName) return {id:'', name:freeName, phone:freePhone, isNew:true};
  return {id:'', name:'', phone:'', isNew:false};
}

function checkout() {
  if(cartLines.length===0){ showAlert(t('alertCartEmpty'),'danger'); return; }
  const total=parseFloat(document.getElementById('ct-total').textContent)||0;
  const rec=parseFloat(document.getElementById('pos-received').value)||0;
  if(payMode==='especes'&&rec<total){ showAlert('⚠️ '+t('amountReceived'),'danger'); return; }
  const ci = getPosClientInfo();
  // Crédit requires a client name (registered OR free client name)
  if(payMode==='credit'&&!ci.name){ showAlert(t('alertClientRequired'),'danger'); return; }
  const clientObj = ci.id ? clients.find(c=>c.id===ci.id) : null;
  const clientName = ci.name || 'Client';
  const clientPhone = ci.phone || '';
  const num = invoiceCounter++;
  const date = new Date();

  // Deduct stock
  cartLines.forEach(l=>{
    const p=products.find(x=>x.code===l.code);
    if(p) p.stock = Math.max(0, p.stock-l.qty);
    sales.push({
      invoiceNumber:num, date, client:clientName, clientPhone,
      code:l.code, name:l.name, price:l.price, qty:l.qty, unit:l.unit,
      disc:l.disc, lineTotal:l.total, invoiceTotal:total, payMode
    });
  });

  // Record operation for registered client (credit) or virement (all modes for registered clients)
  if(clientObj) {
    if(payMode==='credit') {
      operations.push({
        id:'OP'+Date.now(), clientId:clientObj.id, type:'vente',
        montant:total, date:new Date().toISOString(),
        reference:'Facture N°'+num, payMode:'credit'
      });
    } else {
      // For especes/virement/cheque — record as vente-comptant (not affecting credit balance)
      operations.push({
        id:'OP'+Date.now(), clientId:clientObj.id, type:'vente-comptant',
        montant:total, date:new Date().toISOString(),
        reference:'Facture N°'+num, payMode:payMode
      });
    }
  }
  // For free/temporary clients with credit, record in sales but no operation (already in sales array)
  save();
  showAlert(`✅ N°${num} ${t('alertSaved')}`,'success');
  if(confirm('🖨️ '+t('print')+' ?')) printReceipt();
  // Clear everything after sale
  cartLines=[];
  document.getElementById('pos-received').value='';
  const fn=document.getElementById('pos-free-name');if(fn)fn.value='';
  const fp=document.getElementById('pos-free-phone');if(fp)fp.value='';
  document.getElementById('pos-client').value='';
  document.getElementById('pos-client-search').value='';
  document.getElementById('pos-client-info').style.display='none';
  renderCart();
  renderPosGrid();
  checkStockAlerts();
}

function checkStockAlerts() {
  const low = products.filter(p=>p.stock<=0);
  const badge = document.getElementById('stock-alert-badge');
  if (!badge) return;
  if(low.length>0){
    badge.innerHTML = `<svg class="icon-svg" style="width:12px;height:12px;margin-right:4px;"><use href="#i-alert"></use></svg>${low.length} ${mt('stockAlert', t('outStock'))}`;
    badge.style.display='block';
  } else {
    badge.style.display='none';
  }
}

function printReceipt() {
  const L = getTicketLabels();
  const total=parseFloat(document.getElementById('ct-total').textContent)||0;
  let sub=0, disc=0;
  cartLines.forEach(l=>{ const ls=l.price*l.qty; sub+=ls; disc+=ls*(l.disc/100); });
  const rec=parseFloat(document.getElementById('pos-received').value)||0;
  const num=invoiceCounter-1;
  const date=new Date();
  const ci = getPosClientInfo();
  const pm=payMode==='especes'?L.cash:payMode==='credit'?L.credit:payMode==='virement'?'📲 Virement':'🏦 Chèque';

  const rows = cartLines.map(l=>`
    <tr>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;font-weight:600;font-size:12px;">${l.name}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:center;font-weight:700;font-size:12px;">${l.qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;font-size:12px;">${l.price.toFixed(2)} DH</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;font-weight:900;font-size:12px;color:#0f4c2a;">${l.total.toFixed(2)} DH</td>
    </tr>`).join('');

  const clientBlock = ci.name ? `
    <div style="background:#f7f9f7;border-radius:6px;padding:8px 12px;margin-bottom:10px;font-size:12px;">
      <strong style="color:#0f4c2a;">👤 ${ci.name}</strong>
      ${ci.phone?` &nbsp;📞 ${ci.phone}`:''}
    </div>` : '';

  const header = getBonHeader(`${L.invoice} ${L.num}${num}`, num, [
    `${L.date}: ${date.toLocaleDateString(L.dateLocale)} ${date.toLocaleTimeString(L.dateLocale,{hour:'2-digit',minute:'2-digit'})}`,
  ]);

  const table = `
    ${clientBlock}
    <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:12px;">
      <thead>
        <tr style="background:#fff;color:#000;border-bottom:2px solid #000;">
          <th style="padding:7px 8px;text-align:left;font-size:11px;color:#000;">${L.product}</th>
          <th style="padding:7px 8px;text-align:center;font-size:11px;color:#000;">${L.qty}</th>
          <th style="padding:7px 8px;text-align:right;font-size:11px;color:#000;">${L.unitPrice}</th>
          <th style="padding:7px 8px;text-align:right;font-size:11px;color:#000;">${L.total}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;

  const totalsBlock = `
    <div style="display:flex;justify-content:flex-end;margin-bottom:8px;">
      <div style="min-width:180px;">
        ${disc>0?`<div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 0;color:#e53935;border-bottom:1px solid #eee;"><span>${t('discount')}</span><span>-${disc.toFixed(2)} DH</span></div>`:''}
        <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:900;padding:8px 0;border-top:2px solid #000;color:#0f4c2a;"><span>TOTAL</span><span>${total.toFixed(2)} DH</span></div>
        <div style="background:#f5f5f5;border-radius:5px;padding:5px 10px;font-size:12px;text-align:center;"><strong style="color:#000;">${L.change}:</strong> <span style="color:#000;font-weight:700;">${pm}</span></div>
        ${payMode==='especes'&&rec>0?`<div style="font-size:11px;color:#000;margin-top:5px;text-align:right;">${L.received}: <strong style="color:#000;">${rec.toFixed(2)} DH</strong> | ${L.change}: <strong style="color:#000;">${(rec-total).toFixed(2)} DH</strong></div>`:''}
      </div>
    </div>`;

  doPrint(header + table + totalsBlock + getBonFooter());
}

// ─── RETURNS ──────────────────────────────────────────────












function filterInventory(){ renderInventory(document.getElementById('inv-search')?.value.trim().toLowerCase()||''); }




// ─── INVENTORY ────────────────────────────────────────────
function renderInventory(query='') {
  const total=products.length;
  const low=products.filter(p=>p.stock>0&&p.stock<=(p.threshold||10)).length;
  const out=products.filter(p=>p.stock<=0).length;
  const val=products.reduce((s,p)=>s+p.price*p.stock,0);
  document.getElementById('inv-stat-total').textContent=total;
  document.getElementById('inv-stat-low').textContent=low;
  document.getElementById('inv-stat-out').textContent=out;
  document.getElementById('inv-stat-val').textContent=val.toFixed(0)+' DH';
  
  const grid=document.getElementById('inv-grid');
  let list = products.slice().sort((a,b)=>a.name.localeCompare(b.name));
  if(query) list = list.filter(p=>p.name.toLowerCase().includes(query)||p.code.toLowerCase().includes(query));
  grid.innerHTML=list.map((p,i)=>{
    const thr=p.threshold||10;
    const pct=Math.min(100,(p.stock/Math.max(thr*2,1))*100);
    let barClass='ok';
    if(p.stock<=0) barClass='out';
    else if(p.stock<=thr) barClass='low';
    const realIdx=products.indexOf(p);
    return `<div class="inv-card">
      <div class="inv-name">${p.name}</div>
      <div class="inv-code">${p.code} • ${t('minStock').split(' ')[0]}: ${thr} ${p.unit}</div>
      <div class="inv-bar-wrap"><div class="inv-bar ${barClass}" style="width:${pct}%;"></div></div>
      <div class="inv-info">
        <span class="stock-badge ${barClass==='ok'?'stock-ok':barClass==='low'?'stock-low':'stock-out'}">${p.stock} ${p.unit}</span>
        <span style="font-size:12px;color:var(--gray-600);">${p.price.toFixed(2)} DH/u</span>
      </div>
      <div class="inv-adjust">
        <input type="number" id="inv-inp-${realIdx}" step="0.01" min="0" placeholder="${t('qty')}…">
        <button class="inv-btn-add" onclick="addStock(${realIdx})">➕</button>
      </div>
    </div>`;
  }).join('');
}

function addStock(idx) {
  const inp=document.getElementById('inv-inp-'+idx);
  const qty=parseFloat(inp.value)||0;
  if(qty<=0){ showAlert('⚠️ '+t('qty'),'danger'); return; }
  products[idx].stock+=qty;
  save();
  inp.value='';
  showAlert(`✅ +${qty} ${products[idx].unit} → ${products[idx].name}`,'success');
  renderInventory();
  renderPosGrid();
  checkStockAlerts();
}

// ─── PRODUCTS TABLE ────────────────────────────────────────
function renderProductTable(query='') {
  const list=products.filter(p=>!query||p.name.toLowerCase().includes(query)||p.code.toLowerCase().includes(query));
  document.getElementById('prod-table').innerHTML=list.map((p,i)=>{
    const realIdx=products.indexOf(p);
    const img=p.image?`<img src="${p.image}" style="width:46px;height:46px;object-fit:cover;border-radius:6px;">`:`<div style="width:46px;height:46px;background:#f0f0f0;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:22px;">📦</div>`;
    return `<tr>
      <td>${img}</td><td>${p.code}</td><td><strong>${p.name}</strong></td>
      <td>${p.price.toFixed(2)} DH</td>
      <td style="color:var(--blue);font-weight:700;">${p.buyPrice?p.buyPrice.toFixed(2)+' DH':'—'}</td>
      <td style="${p.stock<=(p.threshold||10)?'color:var(--red);font-weight:700;':''}">${p.stock} ${p.unit}</td>
      <td>${p.unit}</td>
      <td>
        <button class="btn-icon btn-edit" onclick="editProduct(${realIdx})">✏️</button>
        <button class="btn-icon btn-danger" onclick="delProduct(${realIdx})">🗑️</button>
      </td>
    </tr>`;
  }).join('');
}
function filterProdList(){ renderProductTable(document.getElementById('prod-search').value.trim().toLowerCase()); }

// ─── PRODUCT MODAL ─────────────────────────────────────────
function openProductModal(idx=null) {
  document.getElementById('p-edit-idx').value = idx===null?'':idx;
  document.getElementById('prod-modal-title').textContent = idx===null?('📦 '+t('newProduct').replace('➕ ','')):'📦 '+t('name');
  if(idx!==null) {
    const p=products[idx];
    document.getElementById('p-code').value=p.code;
    document.getElementById('p-name').value=p.name;
    document.getElementById('p-price').value=p.price;
    if(document.getElementById('p-buy-price'))document.getElementById('p-buy-price').value=p.buyPrice||'';
    document.getElementById('p-stock').value=p.stock;
    document.getElementById('p-threshold').value=p.threshold||10;
    document.getElementById('p-unit').value=p.unit;
    if(p.image){ currentImg=p.image; document.getElementById('upload-preview').src=p.image; document.getElementById('upload-preview').style.display='block'; document.getElementById('upload-ph').style.display='none'; document.getElementById('upload-zone').classList.add('has-img'); }
  } else {
    document.getElementById('p-code').value=''; document.getElementById('p-name').value='';
    document.getElementById('p-price').value=''; document.getElementById('p-stock').value='';
    document.getElementById('p-threshold').value=10; currentImg=null;
    document.getElementById('upload-preview').style.display='none';
    document.getElementById('upload-ph').style.display='block';
    document.getElementById('upload-zone').classList.remove('has-img');
  }
  document.getElementById('product-modal').classList.add('active');
}
function closeProdModal(){ document.getElementById('product-modal').classList.remove('active'); }
function editProduct(idx){ openProductModal(idx); }
function delProduct(idx){
  if(idx<0||idx>=products.length) return;
  if(!confirm(t('confirmDelete'))) return;
  const removed=products[idx];
  trash.push({type:'product',item:removed,date:new Date().toISOString()});
  products.splice(idx,1);
  playBeep('delete');
  save();
  renderProductTable();
  renderInventory();
  renderPosGrid();
  loadProductOptions();
  renderTrash();
  showAlert('🗑️ Supprimé — récupérable dans la corbeille','success');
}
function previewProdImg(e) {
  const f=e.target.files[0]; if(!f) return;
  if(f.size>2*1024*1024){ showAlert('❌ Image max 2MB','danger'); return; }
  const r=new FileReader();
  r.onload=ev=>{ currentImg=ev.target.result; document.getElementById('upload-preview').src=currentImg; document.getElementById('upload-preview').style.display='block'; document.getElementById('upload-ph').style.display='none'; document.getElementById('upload-zone').classList.add('has-img'); };
  r.readAsDataURL(f);
}
function saveProduct() {
  const code=document.getElementById('p-code').value.toUpperCase().trim();
  const name=document.getElementById('p-name').value.trim();
  const price=parseFloat(document.getElementById('p-price').value);
  const buyPrice=parseFloat(document.getElementById('p-buy-price')?.value)||0;
  const stock=parseFloat(document.getElementById('p-stock').value);
  const thr=parseFloat(document.getElementById('p-threshold').value)||10;
  const unit=document.getElementById('p-unit').value;
  const idx=document.getElementById('p-edit-idx').value;
  if(!code||!name||isNaN(price)||isNaN(stock)){ showAlert(t('codeRequired'),'danger'); return; }
  if(idx==='') {
    if(products.some(p=>p.code===code)){ showAlert('❌ '+t('code')+' '+t('alertSaved'),'danger'); return; }
    products.push({code,name,price,buyPrice,stock,unit,threshold:thr,image:currentImg});
  } else {
    const i=parseInt(idx);
    products[i]={...products[i],code,name,price,buyPrice,stock,unit,threshold:thr,image:currentImg};
  }
  save(); closeProdModal(); renderProductTable(); renderPosGrid(); loadProductOptions(); showAlert(t('alertSaved'),'success');
}

// ─── CLIENTS ──────────────────────────────────────────────
function renderClientsTable(query='') {
  const list = query ? clients.filter(c=>
    c.name.toLowerCase().includes(query)||
    (c.phone||'').includes(query) ||
    getClientDisplayCode(c).toLowerCase().includes(query)
  ) : clients;
  const tbody = document.getElementById('client-table-body');
  if(!tbody) return;
  
  // Update stats
  let totalVentes=0, totalPaie=0, totalRets=0;
  clients.forEach(c=>{
    const ops = operations.filter(o=>o.clientId===c.id);
    totalVentes += ops.filter(o=>o.type==='vente').reduce((s,o)=>s+o.montant,0);
    totalPaie   += ops.filter(o=>o.type==='paiement').reduce((s,o)=>s+o.montant,0);
    totalRets   += ops.filter(o=>o.type==='retour').reduce((s,o)=>s+o.montant,0);
  });
  const totalCredit = totalVentes - totalPaie - totalRets;
  const se=id=>v=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  se('cli-stat-total')(clients.length);
  se('cli-stat-credit')(totalCredit.toFixed(2)+' DH');
  se('cli-stat-ventes')(totalVentes.toFixed(2)+' DH');
  se('cli-stat-paie')(totalPaie.toFixed(2)+' DH');

  if(!list.length){
    tbody.innerHTML='<tr><td colspan="10" style="text-align:center;padding:30px;color:var(--gray-600);">Aucun client trouvé</td></tr>';
    applyManualUiTranslations();
    return;
  }
  tbody.innerHTML = list.map(c=>{
    const ops = operations.filter(o=>o.clientId===c.id);
    const ventes  = ops.filter(o=>o.type==='vente').reduce((s,o)=>s+o.montant,0);
    const paie    = ops.filter(o=>o.type==='paiement').reduce((s,o)=>s+o.montant,0);
    const rets    = ops.filter(o=>o.type==='retour').reduce((s,o)=>s+o.montant,0);
    const credit  = ventes - paie - rets;
    const creditColor = credit>0 ? 'color:#c62828;font-weight:900;' : 'color:#2e7d32;font-weight:900;';
    const realIdx = clients.indexOf(c);
    return `<tr>
      <td><strong>${c.name}</strong><br><small style="color:#888;">${c.entryDate||''}</small></td>
      <td><span style="font-family:'Fira Code',monospace;font-size:11px;font-weight:700;color:#37474f;">${getClientDisplayCode(c)||'—'}</span></td>
      <td>${c.phone||'—'}</td>
      <td style="font-size:12px;">${c.address||'—'}</td>
      <td style="color:#1565c0;font-weight:700;">${ventes.toFixed(2)} DH</td>
      <td style="color:#2e7d32;font-weight:700;">${paie.toFixed(2)} DH</td>
      <td style="color:#f57c00;font-weight:700;">${rets.toFixed(2)} DH</td>
      <td><span style="padding:5px 12px;border-radius:20px;background:${credit>0?'#ffebee':'#e8f5e9'};${creditColor}font-size:13px;">${credit.toFixed(2)} DH</span></td>
      <td style="font-size:12px;max-width:140px;overflow:hidden;text-overflow:ellipsis;">${c.note||'—'}</td>
      <td>
        <button onclick="openClientDetail('${c.id}')" style="padding:4px 8px;border:none;border-radius:6px;background:#e3f2fd;color:#1565c0;font-weight:700;cursor:pointer;font-size:11px;margin-bottom:3px;display:block;width:100%;">📂 Dossier</button>
        <button onclick="editClient(${realIdx})" style="padding:4px 8px;border:none;border-radius:6px;background:var(--green-glow);color:var(--green-dark);font-weight:700;cursor:pointer;font-size:11px;margin-bottom:3px;display:block;width:100%;">✏️ Modifier</button>
        <button onclick="delClient(${realIdx})" style="padding:4px 8px;border:none;border-radius:6px;background:#ffebee;color:#c62828;font-weight:700;cursor:pointer;font-size:11px;display:block;width:100%;">🗑️ Supprimer</button>
      </td>
    </tr>`;
  }).join('');
  applyManualUiTranslations();
}
function filterClients(){ renderClientsTable(document.getElementById('client-search')?.value.trim().toLowerCase()||''); }
function openClientModal(){
  document.getElementById('cli-modal-title').textContent=mt('newClientBtn','Nouveau Client');
  ['c-name','c-phone','c-addr'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const noteEl=document.getElementById('c-note');if(noteEl)noteEl.value='';
  document.getElementById('c-edit-idx').value='';
  document.getElementById('c-entry-date').value=new Date().toISOString().split('T')[0];
  const pmEl=document.getElementById('c-paymode-sel');if(pmEl)pmEl.value='any';
  const ciEl=document.getElementById('c-credit-initial');if(ciEl)ciEl.value='0';
  const ciGroup=document.getElementById('c-credit-initial-group');if(ciGroup)ciGroup.style.display='block';
  document.getElementById('client-modal').classList.add('active');
}
function closeClientModal(){ document.getElementById('client-modal').classList.remove('active'); }
function editClient(i){
  const c=clients[i];
  document.getElementById('cli-modal-title').textContent='Modifier Client';
  document.getElementById('c-name').value=c.name||'';
  document.getElementById('c-phone').value=c.phone||'';
  document.getElementById('c-addr').value=c.address||'';
  const noteEl=document.getElementById('c-note');if(noteEl)noteEl.value=c.note||'';
  document.getElementById('c-entry-date').value=c.entryDate||'';
  const pmEl=document.getElementById('c-paymode-sel');if(pmEl)pmEl.value=c.paymode||'any';
  document.getElementById('c-edit-idx').value=i;
  const ciEl=document.getElementById('c-credit-initial');if(ciEl)ciEl.value=getClientInitialCredit(c.id).toFixed(2);
  const ciGroup=document.getElementById('c-credit-initial-group');if(ciGroup)ciGroup.style.display='block';
  document.getElementById('client-modal').classList.add('active');
}
function selectPayMode(mode) {
  const clientLabels = document.querySelectorAll('#client-modal .pay-mode-radio');
  clientLabels.forEach(el => el.classList.remove('selected','selected-credit','selected-cheque'));
  const radios = document.querySelectorAll('input[name="c-paymode"]');
  radios.forEach(r => { if(r.value===mode) r.checked=true; });
  if(mode==='any') clientLabels[0] && clientLabels[0].classList.add('selected');
  if(mode==='cash') clientLabels[1] && clientLabels[1].classList.add('selected');
  if(mode==='credit') clientLabels[2] && clientLabels[2].classList.add('selected-credit');
  if(mode==='cheque') clientLabels[3] && clientLabels[3].classList.add('selected-cheque');
  const block = document.getElementById('c-credit-amount-block');
  if(block) block.style.display = mode==='credit' ? '' : 'none';
}
function selectSupPayMode(mode) {
  const supLabels = document.querySelectorAll('#supplier-modal .pay-mode-radio');
  supLabels.forEach(el => el.classList.remove('selected','selected-credit','selected-cheque'));
  const radios = document.querySelectorAll('input[name="s-paymode"]');
  radios.forEach(r => { if(r.value===mode) r.checked=true; });
  if(mode==='cash') supLabels[0] && supLabels[0].classList.add('selected');
  if(mode==='credit') supLabels[1] && supLabels[1].classList.add('selected-credit');
  if(mode==='cheque') supLabels[2] && supLabels[2].classList.add('selected-cheque');
  const block = document.getElementById('s-credit-amount-block');
  if(block) block.style.display = mode==='credit' ? '' : 'none';
}
function delClient(i){ if(!confirm(t('confirmDelete'))) return; trash.push({type:'client',item:clients[i],date:new Date().toISOString()}); clients.splice(i,1); playBeep('delete'); save(); renderClientsTable(); loadClientOptions(); renderTrash(); showAlert('🗑️ Supprimé — récupérable dans la corbeille','success'); }
function deleteAllClients() {
  if(!confirm('⚠️ Supprimer TOUS les clients ? Ils seront récupérables dans la corbeille.')) return;
  clients.forEach(c=>trash.push({type:'client',item:c,date:new Date().toISOString()}));
  clients=[];
  save(); renderClientsTable(); loadClientOptions(); renderTrash();
  showAlert('🗑️ Tous les clients supprimés — récupérables dans la corbeille','success');
}
function saveClient() {
  const name = document.getElementById('c-name').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  const address = document.getElementById('c-addr').value.trim();
  const note = document.getElementById('c-note')?.value.trim()||'';
  const paymode = document.getElementById('c-paymode-sel')?.value||'any';
  const entryDate = document.getElementById('c-entry-date').value||new Date().toISOString().split('T')[0];
  const creditInitial = Math.max(0, parseFloat(document.getElementById('c-credit-initial')?.value)||0);
  if(!name){ showAlert('⚠️ Le nom est requis','danger'); return; }
  const editIdx = document.getElementById('c-edit-idx').value;
  if(editIdx!=='') {
    const i=parseInt(editIdx);
    clients[i]={...clients[i], name, phone, address, note, paymode, entryDate};
    upsertClientInitialCredit(clients[i].id, creditInitial);
  } else {
    const newClient = {id:'CLI'+Date.now(), code:generateClientCode(), name, phone, address, note, paymode, entryDate};
    clients.push(newClient);
    upsertClientInitialCredit(newClient.id, creditInitial);
  }
  save(); playBeep();
  closeClientModal();
  renderClientsTable();
  loadClientOptions();
  showAlert('✅ Client enregistré','success');
}
function loadClientOptions() {
  const sel=document.getElementById('pos-client');
  if(sel) sel.innerHTML='<option value="">'+t('selectClient')+'</option>'+clients.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
  const retDl=document.getElementById('ret-client-datalist');
  if(retDl) retDl.innerHTML=clients.map(c=>`<option value="${c.name}">`).join('');
  const retPdl=document.getElementById('ret-product-datalist');
  if(retPdl) retPdl.innerHTML=products.map(p=>`<option value="${p.name}">`).join('');
  const retDate=document.getElementById('ret-date');
  if(retDate&&!retDate.value) retDate.value=new Date().toISOString().split('T')[0];
  const rsel=document.getElementById('ret-product');
  if(rsel) rsel.innerHTML='<option value="">'+t('selectOption')+'</option>'+products.map(p=>`<option value="${p.code}">${p.name}</option>`).join('');
}

// ─── SUPPLIERS ────────────────────────────────────────────
function renderSuppliersTable(query='') {
  const list = query ? suppliers.filter(s=>
    s.name.toLowerCase().includes(query)||
    (s.phone||'').includes(query)
  ) : suppliers;
  const tbody = document.getElementById('supplier-table-body');
  if(!tbody) return;

  // Stats
  let totalAchatsAll=0, totalPayeAll=0;
  suppliers.forEach(s=>{
    const sAchats = achats.filter(a=>(a.supplier||'').toLowerCase()===(s.name||'').toLowerCase());
    totalAchatsAll += sAchats.reduce((sum,a)=>sum+a.total,0);
    const sOps = operations.filter(o=>o.supplierId===s.id&&o.type==='paiement-fournisseur');
    totalPayeAll += sOps.reduce((sum,o)=>sum+o.montant,0);
  });
  const se=id=>v=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  se('sup-stat-total')(suppliers.length);
  se('sup-stat-achats')(totalAchatsAll.toFixed(2)+' DH');
  se('sup-stat-paye')(totalPayeAll.toFixed(2)+' DH');
  se('sup-stat-du')((totalAchatsAll-totalPayeAll).toFixed(2)+' DH');

  if(!list.length){
    tbody.innerHTML='<tr><td colspan="8" style="text-align:center;padding:30px;color:var(--gray-600);">Aucun fournisseur trouvé</td></tr>';
    applyManualUiTranslations();
    return;
  }
  tbody.innerHTML = list.map(s=>{
    const sAchats = achats.filter(a=>(a.supplier||'').toLowerCase()===(s.name||'').toLowerCase());
    const totalA = sAchats.reduce((sum,a)=>sum+a.total,0);
    const sOps = operations.filter(o=>o.supplierId===s.id&&o.type==='paiement-fournisseur');
    const totalP = sOps.reduce((sum,o)=>sum+o.montant,0);
    const du = totalA - totalP;
    const duColor = du>0 ? 'color:#c62828;font-weight:900;' : 'color:#2e7d32;font-weight:900;';
    const realIdx = suppliers.indexOf(s);
    return `<tr>
      <td><strong>${s.name}</strong><br><small style="color:#888;">${s.entryDate||''}</small></td>
      <td>${s.phone||'—'}</td>
      <td style="font-size:12px;">${s.address||'—'}</td>
      <td style="color:#1565c0;font-weight:700;">${totalA.toFixed(2)} DH</td>
      <td style="color:#2e7d32;font-weight:700;">${totalP.toFixed(2)} DH</td>
      <td><span style="padding:5px 12px;border-radius:20px;background:${du>0?'#ffebee':'#e8f5e9'};${duColor}font-size:13px;">${du.toFixed(2)} DH</span></td>
      <td style="font-size:12px;max-width:140px;">${s.note||'—'}</td>
      <td>
        <button onclick="openSupplierDetail('${s.id}')" style="padding:4px 8px;border:none;border-radius:6px;background:#e3f2fd;color:#1565c0;font-weight:700;cursor:pointer;font-size:11px;margin-bottom:3px;display:block;width:100%;">📂 Dossier</button>
        <button onclick="editSupplier(${realIdx})" style="padding:4px 8px;border:none;border-radius:6px;background:var(--green-glow);color:var(--green-dark);font-weight:700;cursor:pointer;font-size:11px;margin-bottom:3px;display:block;width:100%;">✏️ Modifier</button>
        <button onclick="delSupplier(${realIdx})" style="padding:4px 8px;border:none;border-radius:6px;background:#ffebee;color:#c62828;font-weight:700;cursor:pointer;font-size:11px;display:block;width:100%;">🗑️ Supprimer</button>
      </td>
    </tr>`;
  }).join('');
  applyManualUiTranslations();
}
function filterSuppliers(){ renderSuppliersTable(document.getElementById('supplier-search')?.value.trim().toLowerCase()||''); }
function openSupplierModal(){
  document.getElementById('sup-modal-title').textContent=mt('newSupplierBtn','Nouveau Fournisseur');
  ['s-name','s-phone','s-addr'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const noteEl=document.getElementById('s-note');if(noteEl)noteEl.value='';
  document.getElementById('s-edit-idx').value='';
  document.getElementById('s-entry-date').value=new Date().toISOString().split('T')[0];
  const pmEl=document.getElementById('s-paymode-sel');if(pmEl)pmEl.value='cash';
  document.getElementById('supplier-modal').classList.add('active');
}
function closeSupplierModal(){ document.getElementById('supplier-modal').classList.remove('active'); }
function editSupplier(i){
  const s=suppliers[i];
  document.getElementById('sup-modal-title').textContent='Modifier Fournisseur';
  document.getElementById('s-name').value=s.name||'';
  document.getElementById('s-phone').value=s.phone||'';
  document.getElementById('s-addr').value=s.address||'';
  const noteEl=document.getElementById('s-note');if(noteEl)noteEl.value=s.note||'';
  document.getElementById('s-entry-date').value=s.entryDate||'';
  const pmEl=document.getElementById('s-paymode-sel');if(pmEl)pmEl.value=s.paymode||'cash';
  document.getElementById('s-edit-idx').value=i;
  document.getElementById('supplier-modal').classList.add('active');
}
function delSupplier(i){ if(!confirm(t('confirmDelete'))) return; trash.push({type:'supplier',item:suppliers[i],date:new Date().toISOString()}); suppliers.splice(i,1); playBeep('delete'); save(); renderSuppliersTable(); renderTrash(); showAlert('🗑️ Supprimé — récupérable dans la corbeille','success'); }
function deleteAllSuppliers() {
  if(!confirm('⚠️ Supprimer TOUS les fournisseurs ? Ils seront récupérables dans la corbeille.')) return;
  suppliers.forEach(s=>trash.push({type:'supplier',item:s,date:new Date().toISOString()}));
  suppliers=[];
  save(); renderSuppliersTable(); renderTrash();
  showAlert('🗑️ Tous les fournisseurs supprimés — récupérables dans la corbeille','success');
}
function saveSupplier() {
  const name = document.getElementById('s-name').value.trim();
  const phone = document.getElementById('s-phone').value.trim();
  const address = document.getElementById('s-addr').value.trim();
  const note = document.getElementById('s-note')?.value.trim()||'';
  const paymode = document.getElementById('s-paymode-sel')?.value||'cash';
  const entryDate = document.getElementById('s-entry-date').value||new Date().toISOString().split('T')[0];
  if(!name){ showAlert('⚠️ Le nom est requis','danger'); return; }
  const editIdx = document.getElementById('s-edit-idx').value;
  if(editIdx!=='') {
    const i=parseInt(editIdx);
    suppliers[i]={...suppliers[i], name, phone, address, note, paymode, entryDate};
  } else {
    suppliers.push({id:'SUP'+Date.now(), name, phone, address, note, paymode, entryDate});
  }
  save(); playBeep();
  closeSupplierModal();
  renderSuppliersTable();
  showAlert('✅ Fournisseur enregistré','success');
}

// ─── SALES HISTORY ─────────────────────────────────────────
function unlockVentes() {
  if(document.getElementById('ventes-pw').value===APP_PW) {
    ventesUnlocked=true;
    document.getElementById('ventes-lock').style.display='none';
    document.getElementById('ventes-content').style.display='block';
    renderSalesTable();
  } else { showAlert(t('alertPwIncorrect'),'danger'); }
  document.getElementById('ventes-pw').value='';
}
function filterSales(){ renderSalesTable(document.getElementById('ventes-search')?.value.trim().toLowerCase()||''); }
function eraseSalesHistoryDirect(){ eraseZone('ventes'); }
function recoverSalesHistoryDirect(){ recoverZone('ventes'); }
function eraseReturnsHistoryDirect(){ eraseZone('retours'); }
function recoverReturnsHistoryDirect(){ recoverZone('retours'); }

function getCheckedDatasetValues(selector, dataKey) {
  const values = new Set();
  document.querySelectorAll(selector).forEach(cb => {
    if(cb.checked && cb.dataset && cb.dataset[dataKey] !== undefined) {
      values.add(String(cb.dataset[dataKey]));
    }
  });
  return [...values];
}

function toggleSelectAllSales(checked) {
  document.querySelectorAll('#sales-table .sales-row-chk').forEach(cb => { cb.checked = checked; });
}

function toggleSelectAllReturns(checked) {
  document.querySelectorAll('#returns-table .returns-row-chk').forEach(cb => { cb.checked = checked; });
}

function toggleSelectAllDeletedSales(checked) {
  document.querySelectorAll('#sales-deleted-list .sales-deleted-chk').forEach(cb => { cb.checked = checked; });
}

function toggleSelectAllDeletedReturns(checked) {
  document.querySelectorAll('#returns-deleted-list .returns-deleted-chk').forEach(cb => { cb.checked = checked; });
}

function deleteSelectedSales() {
  const selected = getCheckedDatasetValues('#sales-table .sales-row-chk', 'invoice');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  deleteSalesInvoicesByNumbers(selected, mt('deleteSelectedSalesConfirm','Supprimer les ventes selectionnees ? (Recuperable)'));
}

function recoverSelectedSales() {
  const selected = getCheckedDatasetValues('#sales-deleted-list .sales-deleted-chk', 'invoice');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  recoverSalesInvoicesByNumbers(selected, mt('recoverSelectedSalesConfirm','Recuperer les ventes selectionnees ?'));
}

function deleteSelectedReturns() {
  const selected = getCheckedDatasetValues('#returns-table .returns-row-chk', 'num');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  deleteReturnsByNumbers(selected, mt('deleteSelectedReturnsConfirm','Supprimer les retours selectionnes ? (Recuperable)'));
}

function recoverSelectedReturns() {
  const selected = getCheckedDatasetValues('#returns-deleted-list .returns-deleted-chk', 'num');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  recoverReturnsByNumbers(selected, mt('recoverSelectedReturnsConfirm','Recuperer les retours selectionnes ?'));
}

function permanentlyDeleteSelectedSales() {
  const selected = getCheckedDatasetValues('#sales-deleted-list .sales-deleted-chk', 'invoice');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  permanentlyDeleteSalesInvoicesByNumbers(selected, mt('deletePermanentlySelectedSalesConfirm','Supprimer definitivement les ventes selectionnees ? Action irreversible.'));
}

function permanentlyDeleteAllSalesDeleted() {
  const backup = readEraseBackup('ventes');
  if(!backup.length){ showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(mt('deletePermanentlyAllSalesConfirm','Supprimer definitivement toutes les ventes supprimees ? Action irreversible.'))) return;
  writeEraseBackup('ventes', []);
  save();
  refreshZoneAfterMutation('ventes');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('deletePermanentlySuccess','Suppression definitive effectuee')}`,'success');
}

function permanentlyDeleteSelectedReturns() {
  const selected = getCheckedDatasetValues('#returns-deleted-list .returns-deleted-chk', 'num');
  if(!selected.length){ showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  permanentlyDeleteReturnsByNumbers(selected, mt('deletePermanentlySelectedReturnsConfirm','Supprimer definitivement les retours selectionnes ? Action irreversible.'));
}

function permanentlyDeleteAllReturnsDeleted() {
  const backup = readEraseBackup('retours');
  if(!backup.length){ showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(mt('deletePermanentlyAllReturnsConfirm','Supprimer definitivement tous les retours supprimes ? Action irreversible.'))) return;
  writeEraseBackup('retours', []);
  save();
  refreshZoneAfterMutation('retours');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('deletePermanentlySuccess','Suppression definitive effectuee')}`,'success');
}

function deleteSingleSalesInvoice(invoiceNumber) {
  deleteSalesInvoicesByNumbers([invoiceNumber], `${t('confirmDelete')} (${mt('eraseZoneSales','historique des ventes')})`);
}

function deleteSingleReturnEntry(num) {
  deleteReturnsByNumbers([num], `${t('confirmDelete')} (${mt('eraseZoneReturns','historique des retours')})`);
}

function recoverSingleDeletedSales(invoiceNumber) {
  recoverSalesInvoicesByNumbers([invoiceNumber], mt('recoverSelectedSalesConfirm','Recuperer les ventes selectionnees ?'));
}

function recoverSingleDeletedReturn(num) {
  recoverReturnsByNumbers([num], mt('recoverSelectedReturnsConfirm','Recuperer les retours selectionnes ?'));
}

function permanentlyDeleteSingleDeletedSales(invoiceNumber) {
  permanentlyDeleteSalesInvoicesByNumbers([invoiceNumber], mt('deletePermanentlyOneSalesConfirm','Supprimer definitivement cette vente ? Action irreversible.'));
}

function permanentlyDeleteSingleDeletedReturn(num) {
  permanentlyDeleteReturnsByNumbers([num], mt('deletePermanentlyOneReturnConfirm','Supprimer definitivement ce retour ? Action irreversible.'));
}

function deleteSalesInvoicesByNumbers(invoiceNumbers, confirmMsg) {
  const selected = new Set(invoiceNumbers.map(v=>String(v)));
  const toErase = sales.filter(s => selected.has(String(s.invoiceNumber)));
  if(!toErase.length) { showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  if(!confirm(confirmMsg || mt('deleteSelectedSalesConfirm','Supprimer les ventes selectionnees ? (Recuperable)'))) return;
  writeEraseBackup('ventes', [...readEraseBackup('ventes'), ...toErase]);
  sales = sales.filter(s => !selected.has(String(s.invoiceNumber)));
  save();
  refreshZoneAfterMutation('ventes');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseClearedAlert','Donnees effacees (recuperables)')}`,'success');
}

function recoverSalesInvoicesByNumbers(invoiceNumbers, confirmMsg) {
  const selected = new Set(invoiceNumbers.map(v=>String(v)));
  const backup = readEraseBackup('ventes');
  const toRestore = backup.filter(s => selected.has(String(s.invoiceNumber)));
  if(!toRestore.length) { showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(confirmMsg || mt('recoverSelectedSalesConfirm','Recuperer les ventes selectionnees ?'))) return;
  const remaining = backup.filter(s => !selected.has(String(s.invoiceNumber)));
  sales = [...sales, ...toRestore];
  writeEraseBackup('ventes', remaining);
  save();
  refreshZoneAfterMutation('ventes');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseRecoveredAlert','Donnees recuperees avec succes')}`,'success');
}

function deleteReturnsByNumbers(returnNumbers, confirmMsg) {
  const selected = new Set(returnNumbers.map(v=>String(v)));
  const toErase = returns.filter(r => selected.has(String(r.num)));
  if(!toErase.length) { showAlert(mt('selectOneLineAlert','Selectionnez au moins une ligne'),'danger'); return; }
  if(!confirm(confirmMsg || mt('deleteSelectedReturnsConfirm','Supprimer les retours selectionnes ? (Recuperable)'))) return;
  writeEraseBackup('retours', [...readEraseBackup('retours'), ...toErase]);
  returns = returns.filter(r => !selected.has(String(r.num)));
  save();
  refreshZoneAfterMutation('retours');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseClearedAlert','Donnees effacees (recuperables)')}`,'success');
}

function recoverReturnsByNumbers(returnNumbers, confirmMsg) {
  const selected = new Set(returnNumbers.map(v=>String(v)));
  const backup = readEraseBackup('retours');
  const toRestore = backup.filter(r => selected.has(String(r.num)));
  if(!toRestore.length) { showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(confirmMsg || mt('recoverSelectedReturnsConfirm','Recuperer les retours selectionnes ?'))) return;
  const remaining = backup.filter(r => !selected.has(String(r.num)));
  returns = [...returns, ...toRestore];
  writeEraseBackup('retours', remaining);
  save();
  refreshZoneAfterMutation('retours');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseRecoveredAlert','Donnees recuperees avec succes')}`,'success');
}

function permanentlyDeleteSalesInvoicesByNumbers(invoiceNumbers, confirmMsg) {
  const selected = new Set(invoiceNumbers.map(v=>String(v)));
  const backup = readEraseBackup('ventes');
  const toDelete = backup.filter(s => selected.has(String(s.invoiceNumber)));
  if(!toDelete.length){ showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(confirmMsg || mt('deletePermanentlySelectedSalesConfirm','Supprimer definitivement les ventes selectionnees ? Action irreversible.'))) return;
  const remaining = backup.filter(s => !selected.has(String(s.invoiceNumber)));
  writeEraseBackup('ventes', remaining);
  save();
  refreshZoneAfterMutation('ventes');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('deletePermanentlySuccess','Suppression definitive effectuee')}`,'success');
}

function permanentlyDeleteReturnsByNumbers(returnNumbers, confirmMsg) {
  const selected = new Set(returnNumbers.map(v=>String(v)));
  const backup = readEraseBackup('retours');
  const toDelete = backup.filter(r => selected.has(String(r.num)));
  if(!toDelete.length){ showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger'); return; }
  if(!confirm(confirmMsg || mt('deletePermanentlySelectedReturnsConfirm','Supprimer definitivement les retours selectionnes ? Action irreversible.'))) return;
  const remaining = backup.filter(r => !selected.has(String(r.num)));
  writeEraseBackup('retours', remaining);
  save();
  refreshZoneAfterMutation('retours');
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('deletePermanentlySuccess','Suppression definitive effectuee')}`,'success');
}

function getDeletedSalesInvoiceGroups() {
  const backup = readEraseBackup('ventes');
  const grouped = {};
  backup.forEach(s => {
    const key = String(s.invoiceNumber);
    if(!grouped[key]) grouped[key] = { invoiceNumber: key, date: s.date, client: s.client || '—', total: s.invoiceTotal || 0, lines: 0 };
    grouped[key].lines += 1;
    if(new Date(s.date) > new Date(grouped[key].date)) grouped[key].date = s.date;
    if(!grouped[key].total && s.invoiceTotal) grouped[key].total = s.invoiceTotal;
  });
  return Object.values(grouped).sort((a,b)=>(Number(b.invoiceNumber)||0)-(Number(a.invoiceNumber)||0));
}

function getDeletedReturnsGroups() {
  const backup = readEraseBackup('retours');
  return [...backup]
    .sort((a,b)=>(Number(b.num)||0)-(Number(a.num)||0))
    .map(r => ({ num: String(r.num), date: r.date, clientName: r.clientName || '—', total: (r.total || r.refund || 0) }));
}

function renderSalesDeletedList() {
  const el = document.getElementById('sales-deleted-list');
  if(!el) return;
  const locale = t('lang') || 'fr-FR';
  const groups = getDeletedSalesInvoiceGroups();
  if(!groups.length) {
    el.innerHTML = `<div style="font-size:12px;color:var(--gray-600);">${mt('noDeletedSales','Aucune vente supprimee')}</div>`;
    return;
  }
  const selectAllText = mt('selectAllShort','Tout selectionner');
  const recoverText = mt('recoverSelectedBtn','Recuperer selection');
  const permanentText = mt('deletePermanentlyBtn','Supprimer definitivement');
  el.innerHTML = `
    <div style="margin-bottom:8px;">
      <label style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--gray-600);cursor:pointer;">
        <input type="checkbox" onchange="toggleSelectAllDeletedSales(this.checked)">
        <span>${selectAllText}</span>
      </label>
    </div>
    ${groups.map(g=>`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border:1px solid var(--gray-100);border-radius:8px;background:#fff;margin-bottom:6px;">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;flex:1;">
          <input type="checkbox" class="sales-deleted-chk" data-invoice="${g.invoiceNumber}">
          <span style="font-size:12px;"><strong>#${g.invoiceNumber}</strong> — ${g.client} — ${new Date(g.date).toLocaleDateString(locale)} — ${g.total.toFixed(2)} DH</span>
        </label>
        <div style="display:flex;align-items:center;gap:6px;">
          <button onclick="recoverSingleDeletedSales('${g.invoiceNumber}')" style="border:none;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:6px 10px;font-weight:700;cursor:pointer;font-size:11px;">↺ ${recoverText}</button>
          <button onclick="permanentlyDeleteSingleDeletedSales('${g.invoiceNumber}')" style="border:none;background:#212121;color:#fff;border-radius:6px;padding:6px 10px;font-weight:700;cursor:pointer;font-size:11px;">✕ ${permanentText}</button>
        </div>
      </div>
    `).join('')}
  `;
}

function renderReturnsDeletedList() {
  const el = document.getElementById('returns-deleted-list');
  if(!el) return;
  const locale = t('lang') || 'fr-FR';
  const groups = getDeletedReturnsGroups();
  if(!groups.length) {
    el.innerHTML = `<div style="font-size:12px;color:var(--gray-600);">${mt('noDeletedReturns','Aucun retour supprime')}</div>`;
    return;
  }
  const selectAllText = mt('selectAllShort','Tout selectionner');
  const recoverText = mt('recoverSelectedBtn','Recuperer selection');
  const permanentText = mt('deletePermanentlyBtn','Supprimer definitivement');
  el.innerHTML = `
    <div style="margin-bottom:8px;">
      <label style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--gray-600);cursor:pointer;">
        <input type="checkbox" onchange="toggleSelectAllDeletedReturns(this.checked)">
        <span>${selectAllText}</span>
      </label>
    </div>
    ${groups.map(g=>`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border:1px solid var(--gray-100);border-radius:8px;background:#fff;margin-bottom:6px;">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;flex:1;">
          <input type="checkbox" class="returns-deleted-chk" data-num="${g.num}">
          <span style="font-size:12px;"><strong>#${g.num}</strong> — ${g.clientName} — ${new Date(g.date).toLocaleDateString(locale)} — ${g.total.toFixed(2)} DH</span>
        </label>
        <div style="display:flex;align-items:center;gap:6px;">
          <button onclick="recoverSingleDeletedReturn('${g.num}')" style="border:none;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:6px 10px;font-weight:700;cursor:pointer;font-size:11px;">↺ ${recoverText}</button>
          <button onclick="permanentlyDeleteSingleDeletedReturn('${g.num}')" style="border:none;background:#212121;color:#fff;border-radius:6px;padding:6px 10px;font-weight:700;cursor:pointer;font-size:11px;">✕ ${permanentText}</button>
        </div>
      </div>
    `).join('')}
  `;
}

function updateSalesHistoryActions() {
  const countEl=document.getElementById('sales-recover-count');
  const recoverBtn=document.getElementById('sales-recover-btn');
  const recoverSelectedBtn=document.getElementById('sales-recover-selected-btn');
  const permanentSelectedBtn=document.getElementById('sales-permanent-delete-selected-btn');
  const permanentAllBtn=document.getElementById('sales-permanent-delete-all-btn');
  const recoverableCount=readEraseBackup('ventes').length;
  if(countEl){
    countEl.textContent=mtf('salesRecoverCount','{count} lignes recuperables (sans limite de duree)',{ count: recoverableCount });
  }
  [recoverBtn,recoverSelectedBtn,permanentSelectedBtn,permanentAllBtn].forEach(btn=>{
    if(!btn) return;
    const disabled=recoverableCount===0;
    btn.disabled=disabled;
    btn.style.opacity=disabled?'0.55':'1';
    btn.style.cursor=disabled?'not-allowed':'pointer';
  });
  renderSalesDeletedList();
}

function updateReturnsHistoryActions() {
  const countEl=document.getElementById('returns-recover-count');
  const recoverBtn=document.getElementById('returns-recover-btn');
  const recoverSelectedBtn=document.getElementById('returns-recover-selected-btn');
  const permanentSelectedBtn=document.getElementById('returns-permanent-delete-selected-btn');
  const permanentAllBtn=document.getElementById('returns-permanent-delete-all-btn');
  const recoverableCount=readEraseBackup('retours').length;
  if(countEl){
    countEl.textContent=mtf('returnsRecoverCount','{count} lignes recuperables (sans limite de duree)',{ count: recoverableCount });
  }
  [recoverBtn,recoverSelectedBtn,permanentSelectedBtn,permanentAllBtn].forEach(btn=>{
    if(!btn) return;
    const disabled=recoverableCount===0;
    btn.disabled=disabled;
    btn.style.opacity=disabled?'0.55':'1';
    btn.style.cursor=disabled?'not-allowed':'pointer';
  });
  renderReturnsDeletedList();
}

function renderSalesTable(query='') {
  let list=[...sales];
  if(query) list=list.filter(s=>s.name.toLowerCase().includes(query)||s.client.toLowerCase().includes(query)||String(s.invoiceNumber).includes(query));
  // Group by invoiceNumber
  const invoices = {};
  list.forEach(s=>{
    if(!invoices[s.invoiceNumber]) invoices[s.invoiceNumber]={invoiceNumber:s.invoiceNumber,date:s.date,client:s.client,payMode:s.payMode,total:s.invoiceTotal,items:[]};
    invoices[s.invoiceNumber].items.push(s);
  });
  const grouped = Object.values(invoices).sort((a,b)=>b.invoiceNumber-a.invoiceNumber);
  const locale=t('lang')||'fr-FR';
  document.getElementById('sales-table').innerHTML=grouped.map(inv=>{
    const d=new Date(inv.date);
    const badge=inv.payMode==='especes'?`<span class="badge badge-cash">${t('cash')}</span>`:inv.payMode==='credit'?`<span class="badge badge-credit">${t('credit')}</span>`:inv.payMode==='virement'?`<span class="badge" style="background:#ede7f6;color:#6a1b9a;font-size:11px;padding:3px 8px;border-radius:6px;font-weight:700;">${mt('transfer','Bank Transfer')}</span>`:`<span class="badge badge-cheque">${mt('cheque','Cheque')}</span>`;
    return `<tr>
      <td><label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" class="sales-row-chk" data-invoice="${inv.invoiceNumber}"><strong>${inv.invoiceNumber}</strong></label></td>
      <td>${d.toLocaleDateString(locale)}</td>
      <td>${inv.client}</td>
      <td style="font-size:11px;color:var(--gray-600);">${inv.items.map(i=>`${i.qty}× ${i.name}`).join('<br>')}</td>
      <td><strong style="color:var(--green-dark);font-size:15px;">${inv.total.toFixed(2)} DH</strong></td>
      <td>${badge}</td>
      <td>
        <div style="display:flex;gap:6px;justify-content:center;">
          <button onclick="printInvoiceBon(${JSON.stringify(inv.invoiceNumber)})" title="${t('print')}" style="padding:5px 10px;border:none;border-radius:6px;background:linear-gradient(135deg,var(--green-main),var(--green-light));color:#fff;font-size:14px;cursor:pointer;font-weight:800;">🖨️</button>
          <button onclick="deleteSingleSalesInvoice(${JSON.stringify(inv.invoiceNumber)})" title="${t('confirmDelete')}" style="padding:5px 10px;border:none;border-radius:6px;background:#ffebee;color:#c62828;font-size:14px;cursor:pointer;font-weight:800;">🗑️</button>
        </div>
      </td>
    </tr>`;
  }).join('') || `<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--gray-600);">${t('noSalesRegistered')}</td></tr>`;
  const salesSelectAll=document.getElementById('sales-select-all-visible');
  if(salesSelectAll) salesSelectAll.checked=false;
  applyManualUiTranslations();
  updateSalesHistoryActions();
}

function printInvoiceBon(invoiceNumber) {
  const invoiceItems = sales.filter(s=>s.invoiceNumber===invoiceNumber);
  if(!invoiceItems.length) return;
  const L = getTicketLabels();
  const s0=invoiceItems[0];
  const date=new Date(s0.date);
  const clientObj=clients.find(c=>c.name===s0.client);
  const pm=s0.payMode==='especes'?`💵 ${L.cash}`:s0.payMode==='credit'?`💳 ${L.credit}`:s0.payMode==='virement'?`📲 ${mt('transfer','Virement')}`:`🏦 ${mt('cheque','Cheque')}`;
  const co=companyInfo;
  const discTotal = invoiceItems.reduce((s,i)=>s+i.price*i.qty,0)-s0.invoiceTotal;
  const rows=invoiceItems.map(i=>`
    <tr>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;font-size:12px;font-weight:600;">${i.name}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:center;font-size:12px;">${i.qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;font-size:12px;">${i.price.toFixed(2)} DH</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;font-weight:800;font-size:12px;color:#0f4c2a;">${i.lineTotal.toFixed(2)} DH</td>
    </tr>`).join('');
  const clientBlock = s0.client ? `<div style="background:#f7f9f7;border-radius:6px;padding:7px 10px;margin-bottom:10px;font-size:12px;"><strong style="color:#0f4c2a;">👤 ${s0.client}</strong>${clientObj&&clientObj.phone?` &nbsp;📞 ${clientObj.phone}`:''}</div>` : '';
  const logoH = logoData ? `<img src="${logoData}" style="max-width:60px;max-height:45px;object-fit:contain;display:block;margin-bottom:3px;">` : '';
  const oneCopy = `<div dir="${L.dir}" style="font-family:${L.fontFamily};width:148mm;box-sizing:border-box;padding:8mm 10mm;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px double #0f4c2a;padding-bottom:10px;margin-bottom:12px;">
      <div>${logoH}<div style="font-size:18px;font-weight:900;color:#0f4c2a;">${co.name||'ASIL CAISSE'}</div>${co.addr?`<div style="font-size:10px;color:#888;">📍 ${co.addr}</div>`:''} ${co.tel?`<div style="font-size:10px;color:#888;">📞 ${co.tel}</div>`:''}</div>
      <div style="text-align:${L.dir==='rtl'?'left':'right'};"><div style="font-size:16px;font-weight:900;background:#0f4c2a;color:#fff;padding:5px 12px;border-radius:6px;display:inline-block;">${L.invoice} ${L.num}${invoiceNumber}</div><div style="font-size:11px;color:#555;margin-top:4px;">${date.toLocaleDateString(L.dateLocale)} ${date.toLocaleTimeString(L.dateLocale,{hour:'2-digit',minute:'2-digit'})}</div></div>
    </div>
    ${clientBlock}
    <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:10px;">
      <thead><tr style="background:#fff;color:#000;border-bottom:2px solid #000;">
        <th style="padding:7px 8px;text-align:left;font-size:11px;color:#000;">${L.product}</th>
        <th style="padding:7px 8px;text-align:center;font-size:11px;color:#000;">${L.qty}</th>
        <th style="padding:7px 8px;text-align:right;font-size:11px;color:#000;">${L.unitPrice}</th>
        <th style="padding:7px 8px;text-align:right;font-size:11px;color:#000;">${L.total}</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="display:flex;justify-content:flex-end;">
      <div style="width:180px;">
        ${discTotal>0.001?`<div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 0;color:#e53935;border-bottom:1px solid #eee;"><span>Remise</span><span>-${discTotal.toFixed(2)} DH</span></div>`:''}
        <div style="display:flex;justify-content:space-between;font-size:16px;font-weight:900;padding:7px 0;border-top:2px solid #000;color:#0f4c2a;"><span>TOTAL</span><span>${s0.invoiceTotal.toFixed(2)} DH</span></div>
        <div style="background:#f5f5f5;border-radius:5px;padding:5px 10px;font-size:12px;text-align:center;"><strong style="color:#000;">${L.change}:</strong> <span style="font-weight:700;color:#000;">${pm}</span></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:16px;padding-top:10px;border-top:1px dashed #ccc;">
      <div style="text-align:center;"><div style="font-size:10px;color:#888;margin-bottom:3px;">${L.clientSig}</div><div style="height:30px;border-bottom:1px solid #999;margin-top:20px;"></div></div>
      <div style="text-align:center;"><div style="font-size:10px;color:#888;margin-bottom:3px;">${L.managerSig}</div><div style="height:30px;border-bottom:1px solid #999;margin-top:20px;"></div></div>
    </div>
    <div style="text-align:center;margin-top:10px;font-size:11px;font-weight:700;color:#0f4c2a;">${L.thanks}</div>
  </div>`;
  document.getElementById('print-ticket').innerHTML = oneCopy;
  document.getElementById('print-ticket').style.display='block';
  setTimeout(()=>{ window.print(); document.getElementById('print-ticket').style.display='none'; },150);
}

// ─── STATS ─────────────────────────────────────────────────
function renderStats() {
  if(!statsUnlocked) return;
  const today=new Date().toDateString();
  const todayS=sales.filter(s=>new Date(s.date).toDateString()===today);
  const todayInv={};
  todayS.forEach(s=>{if(!todayInv[s.invoiceNumber])todayInv[s.invoiceNumber]={total:s.invoiceTotal,payMode:s.payMode};});
  const invList=Object.values(todayInv);
  // CA aujourd'hui = total de TOUTES les ventes du jour (toutes modes)
  const ventesToday=invList.reduce((a,i)=>a+i.total,0);
  // Ventes à crédit du jour
  const creditVentesToday=invList.filter(i=>i.payMode==='credit').reduce((a,i)=>a+i.total,0);
  // Règlements clients du jour (paiements reçus auj.)
  const reglementsToday=operations.filter(o=>o.type==='paiement'&&new Date(o.date).toDateString()===today).reduce((s,o)=>s+o.montant,0);
  // Total retours du jour
  const retToday=returns.filter(r=>r.date&&new Date(r.date).toDateString()===today).reduce((s,r)=>s+(r.total||r.refund||0),0);
  // CA NET = CA(auj) + règlements clients - ventes crédit - retours
  const caNet=ventesToday+reglementsToday-creditVentesToday-retToday;
  const mn=new Date().getMonth(),yr=new Date().getFullYear();
  const mSales=sales.filter(s=>{const d=new Date(s.date);return d.getMonth()===mn&&d.getFullYear()===yr;});
  const mInv={};mSales.forEach(s=>{if(!mInv[s.invoiceNumber])mInv[s.invoiceNumber]={total:s.invoiceTotal};});
  const monthTotal=Object.values(mInv).reduce((a,i)=>a+i.total,0);
  const mAchats=achats.filter(a=>{const d=new Date(a.date);return d.getMonth()===mn&&d.getFullYear()===yr;});
  const totalAchatsMois=mAchats.reduce((s,a)=>s+a.total,0);
  const beneficeMois=monthTotal-totalAchatsMois;
  const set=id=>v=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  set('s-ca-today')(ventesToday.toFixed(2)+' DH');
  set('s-reglements')(reglementsToday.toFixed(2)+' DH');
  set('s-credit-ventes')(creditVentesToday.toFixed(2)+' DH');
  set('s-ca-net')(caNet.toFixed(2)+' DH');
  set('s-month')(monthTotal.toFixed(2)+' DH');
  set('s-achats-mois')(totalAchatsMois.toFixed(2)+' DH');
  set('s-benefice-mois')(beneficeMois.toFixed(2)+' DH');
  const fromEl=document.getElementById('stat-date-from'),toEl=document.getElementById('stat-date-to');
  if(fromEl&&toEl&&fromEl.value&&toEl.value){
    const from=new Date(fromEl.value),to=new Date(toEl.value);to.setHours(23,59,59);
    const pSales=sales.filter(s=>{const d=new Date(s.date);return d>=from&&d<=to;});
    const pInv={};pSales.forEach(s=>{if(!pInv[s.invoiceNumber])pInv[s.invoiceNumber]={total:s.invoiceTotal};});
    const pSTotal=Object.values(pInv).reduce((a,i)=>a+i.total,0);
    const pA=achats.filter(a=>{const d=new Date(a.date);return d>=from&&d<=to;}).reduce((s,a)=>s+a.total,0);
    set('s-benefice-periode')((pSTotal-pA).toFixed(2)+' DH');
  }
  const counts={};sales.forEach(s=>{counts[s.name]=(counts[s.name]||0)+s.qty;});
  const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const topEl=document.getElementById('top-products');
  if(topEl)topEl.innerHTML=sorted.length===0?`<p style="color:var(--gray-600);text-align:center;padding:20px;">${t('noSalesRegistered')}</p>`:sorted.map(([name,qty])=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div style="flex:1;font-weight:700;">${name}</div><div style="font-weight:800;color:var(--green-mid);">${qty} ${t('soldUnits')}</div><div style="width:100px;height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden;"><div style="height:100%;width:${Math.min(100,(qty/(sorted[0][1]||1))*100)}%;background:linear-gradient(90deg,var(--green-main),var(--green-light));border-radius:4px;"></div></div></div>`).join('');
}

// ─── PASSWORD ──────────────────────────────────────────────
function openPwModal(){ document.getElementById('pw-current').value=''; document.getElementById('pw-new').value=''; document.getElementById('pw-confirm').value=''; document.getElementById('pw-alert').innerHTML=''; document.getElementById('pw-modal').classList.add('active'); }
function closePwModal(){ document.getElementById('pw-modal').classList.remove('active'); }
function changePw() {
  const cur=document.getElementById('pw-current').value;
  const nw=document.getElementById('pw-new').value;
  const cf=document.getElementById('pw-confirm').value;
  const al=document.getElementById('pw-alert');
  if(cur!==APP_PW){ al.innerHTML=`<div class="alert-banner danger" style="display:block;">${t('pwCurrentWrong')}</div>`; return; }
  if(nw!==cf){ al.innerHTML=`<div class="alert-banner danger" style="display:block;">${t('alertPwMismatch')}</div>`; return; }
  if(nw.length<4){ al.innerHTML=`<div class="alert-banner danger" style="display:block;">${t('alertPwMinLength')}</div>`; return; }
  APP_PW=nw; localStorage.setItem('asil_pw',nw);
  al.innerHTML=`<div class="alert-banner success" style="display:block;">${t('alertPwChanged')}</div>`;
  setTimeout(closePwModal,1500);
}

// ─── ALERT ─────────────────────────────────────────────────
let alertTimer;
function showAlert(msg, type) {
  const el=document.getElementById('global-alert');
  const cleaned = String(msg || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').replace(/\s{2,}/g,' ').trim();
  el.textContent=cleaned || 'Notification'; el.className='alert-banner '+type;
  if(type==='danger') playBeep('warn');
  if(type==='success') playBeep('success');
  clearTimeout(alertTimer);
  alertTimer=setTimeout(()=>el.className='alert-banner',3500);
}

function triggerImportBackup() {
  const inp = document.getElementById('backup-file-input');
  if(inp) inp.click();
}

function exportBackup() {
  const snapshot = getStateSnapshot();
  const payload = {
    app: 'ASIL CAISSE',
    format: 'asil-backup',
    version: STORAGE_VERSION,
    exportedAt: new Date().toISOString(),
    snapshot
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'asil-backup-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(a.href);
  const statusEl = document.getElementById('backup-last-status');
  if(statusEl) statusEl.textContent = 'Export termine: ' + new Date().toLocaleString('fr-FR');
}

function importBackupFile(event) {
  const file = event?.target?.files?.[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const payload = JSON.parse(e.target.result);
      const snapshot = payload?.snapshot;
      if(!snapshot || !snapshot.data || !Array.isArray(snapshot.data.products)) {
        showAlert('Fichier de sauvegarde invalide', 'danger');
        return;
      }
      if(!confirm('Remplacer toutes les donnees actuelles par cette sauvegarde ?')) return;
      if(!applySnapshot(snapshot)) {
        showAlert('Import impossible', 'danger');
        return;
      }
      save();
      await writeIndexedState(getStateSnapshot());
      init();
      applyLang();
      renderTrash();
      const statusEl = document.getElementById('backup-last-status');
      if(statusEl) statusEl.textContent = 'Import termine: ' + new Date().toLocaleString('fr-FR');
      showAlert('Sauvegarde importee avec succes', 'success');
    } catch(_) {
      showAlert('Erreur de lecture du fichier de sauvegarde', 'danger');
    } finally {
      if(event?.target) event.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ─── PRODUCT OPTIONS FOR RETURNS ──────────────────────────
function loadProductOptions() {
  const rsel=document.getElementById('ret-product');
  if(!rsel) return;
  rsel.innerHTML='<option value="">'+t('selectOption')+'</option>'+products.map(p=>`<option value="${p.code}">${p.name}</option>`).join('');
}


// ─── DASHBOARD ──────────────────────────────────────────────
function renderDashboard() {
  const today=new Date().toDateString();
  const todayS=sales.filter(s=>new Date(s.date).toDateString()===today);
  const inv={};todayS.forEach(s=>{if(!inv[s.invoiceNumber])inv[s.invoiceNumber]={total:s.invoiceTotal};});
  const ca=Object.values(inv).reduce((a,i)=>a+i.total,0);
  const out=products.filter(p=>p.stock<=0).length;
  const el=id=>document.getElementById(id);
  if(el('dash-ca')){el('dash-ca').textContent=ca.toFixed(2)+' DH';el('dash-ca').style.display='block';}
  if(el('dash-prods')){el('dash-prods').textContent=products.length;el('dash-prods').style.display='block';}
  if(el('dash-clients')){el('dash-clients').textContent=clients.length;el('dash-clients').style.display='block';}
  if(el('dash-ruptures')){el('dash-ruptures').textContent=out;el('dash-ruptures').style.display='block';}
  const h=new Date().getHours();
  const bundle = MANUAL_UI_TEXT[currentLang] || MANUAL_UI_TEXT.fr;
  const greet=h<12?bundle.greetMorning:h<18?bundle.greetAfternoon:bundle.greetEvening;
  if(el('dash-welcome'))el('dash-welcome').textContent=greet+' — '+(companyInfo.name||'ASIL CAISSE');
  if(el('dash-date'))el('dash-date').textContent=new Date().toLocaleDateString(t('lang') || 'fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

// ─── STATS UNLOCK ───────────────────────────────────────────
function unlockStats() {
  if(document.getElementById('stats-pw').value===APP_PW){
    statsUnlocked=true;
    document.getElementById('stats-lock').style.display='none';
    document.getElementById('stats-content').style.display='block';
    renderStats();
  } else { showAlert(t('alertPwIncorrect'),'danger'); }
  document.getElementById('stats-pw').value='';
}

// ─── ACHAT ──────────────────────────────────────────────────
function initAchatForm() {
  const bonEl=document.getElementById('achat-bon');
  if(bonEl) bonEl.value='BON-'+String(achatCounter).padStart(4,'0');
  const supDl=document.getElementById('achat-supplier-dl');
  if(supDl)supDl.innerHTML=suppliers.map(s=>`<option value="${s.name}">`).join('');
  const pDl=document.getElementById('achat-prod-dl');
  if(pDl)pDl.innerHTML=products.map(p=>`<option value="${p.name}">`).join('')+products.map(p=>`<option value="${p.code}">`).join('');
  achatLines=[];renderAchatLines();
}
function cancelAchat() {
  if(!achatLines.length && !document.getElementById('achat-supplier').value) return;
  if(!confirm('Annuler le bon en cours ?')) return;
  achatLines=[];
  document.getElementById('achat-supplier').value='';
  document.getElementById('achat-bon').value='BON-'+String(achatCounter).padStart(4,'0');
  renderAchatLines();
  showAlert('✅ Bon annulé','success');
}
function addAchatProduct() {
  const name=document.getElementById('achat-prod-name').value.trim();
  const qty=parseFloat(document.getElementById('achat-prod-qty').value)||0;
  const price=parseFloat(document.getElementById('achat-prod-price').value)||0;
  if(!name||qty<=0||price<=0){showAlert('⚠️ Produit, quantité et prix requis','danger');return;}
  const p=products.find(x=>x.name.toLowerCase()===name.toLowerCase()||x.code.toLowerCase()===name.toLowerCase());
  achatLines.push({name:p?p.name:name,code:p?p.code:'MANUEL',qty,unitPrice:price,total:qty*price});
  document.getElementById('achat-prod-name').value='';
  document.getElementById('achat-prod-qty').value='';
  document.getElementById('achat-prod-price').value='';
  playBeep();renderAchatLines();
}
function removeAchatLine(i){achatLines.splice(i,1);renderAchatLines();}
function renderAchatLines() {
  const el=document.getElementById('achat-products-list');
  if(!el)return;
  if(!achatLines.length){
    el.innerHTML='<div style="text-align:center;padding:16px;color:var(--gray-600);font-size:13px;">Aucun produit ajouté</div>';
    document.getElementById('achat-total').textContent='0.00 DH';
    applyManualUiTranslations();
    return;
  }
  el.innerHTML='<table class="data-table" style="margin-top:0;"><thead><tr><th>Produit</th><th>Qté</th><th>P.U.</th><th>Total</th><th></th></tr></thead><tbody>'+
    achatLines.map((l,i)=>`<tr><td><strong>${l.name}</strong><br><small style="color:#888;">${l.code}</small></td><td>${l.qty}</td><td>${l.unitPrice.toFixed(2)} DH</td><td style="color:var(--green-mid);font-weight:800;">${l.total.toFixed(2)} DH</td><td><button onclick="removeAchatLine(${i})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:4px 8px;cursor:pointer;">✕</button></td></tr>`).join('')+
    '</tbody></table>';
  document.getElementById('achat-total').textContent=achatLines.reduce((s,l)=>s+l.total,0).toFixed(2)+' DH';
  applyManualUiTranslations();
}
function filterAchats(){renderAchatTable(document.getElementById('achat-search')?.value.trim().toLowerCase()||'');}
function renderAchatTable(q='') {
  const list=q?achats.filter(a=>String(a.num).includes(q)||(a.supplier||'').toLowerCase().includes(q)):achats;
  const tb=document.getElementById('achat-table');if(!tb)return;
  const locale=t('lang')||'fr-FR';
  tb.innerHTML=[...list].reverse().slice(0,50).map(a=>`<tr><td><strong>BON-${String(a.num).padStart(4,'0')}</strong></td><td>${new Date(a.date).toLocaleDateString(locale)}</td><td>${a.supplier||'—'}</td><td><strong style="color:var(--blue);">${a.total.toFixed(2)} DH</strong></td><td><button onclick="printAchatBonNum(${a.num})" style="padding:4px 10px;border:none;border-radius:6px;background:#e3f2fd;color:#1565c0;font-weight:700;cursor:pointer;font-size:12px;">🖨️</button></td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--gray-600);">Aucun achat</td></tr>';
  applyManualUiTranslations();
}
function saveAchat() {
  if(!achatLines.length){showAlert('Ajoutez au moins un produit','danger');return;}
  const bonVal = document.getElementById('achat-bon').value.trim() || 'BON-'+String(achatCounter).padStart(4,'0');
  const num=achatCounter++;
  const sup=document.getElementById('achat-supplier').value.trim();
  const total=achatLines.reduce((s,l)=>s+l.total,0);
  achatLines.forEach(l=>{const p=products.find(x=>x.code===l.code);if(p){p.stock+=l.qty;p.buyPrice=l.unitPrice;}});
  achats.push({num,bonRef:bonVal,date:new Date().toISOString(),supplier:sup,lines:[...achatLines],total});
  save();playBeep();
  showAlert('✅ Bon achat '+bonVal+' enregistré','success');
  if(confirm('Imprimer le bon achat ?'))printAchatBonNum(num);
  achatLines=[];renderAchatLines();renderAchatTable();renderPosGrid();checkStockAlerts();
  document.getElementById('achat-bon').value='BON-'+String(achatCounter).padStart(4,'0');
  document.getElementById('achat-supplier').value='';
}

function saveAchatDirect() {
  addAchatProduct();
}

function printAchatBon(){
  if(!achatLines.length){showAlert('⚠️ Aucun produit','danger');return;}
  _doPrintAchat({num:'APERÇU',supplier:document.getElementById('achat-supplier').value||'—',lines:achatLines,total:achatLines.reduce((s,l)=>s+l.total,0),date:new Date().toISOString()});
}
function printAchatBonNum(num){const a=achats.find(x=>x.num===num);if(a)_doPrintAchat(a);}
function _doPrintAchat(a) {
  const L = getTicketLabels();
  const date = new Date(a.date);
  const cols = L.dir==='rtl'
    ? `<th style="padding:8px 10px;text-align:right;">${L.total}</th><th style="padding:8px 10px;text-align:center;">${L.unitPrice}</th><th style="padding:8px 10px;text-align:center;">${L.qty}</th><th style="padding:8px 10px;text-align:right;">${L.product}</th>`
    : `<th style="padding:8px 10px;text-align:left;">${L.product}</th><th style="padding:8px 10px;text-align:center;">${L.qty}</th><th style="padding:8px 10px;text-align:right;">${L.unitPrice}</th><th style="padding:8px 10px;text-align:right;">${L.total}</th>`;
  const rows = a.lines.map(l=>`<tr>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.name}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:center;">${l.qty}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;">${l.unitPrice.toFixed(2)} DH</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;">${l.total.toFixed(2)} DH</td>
  </tr>`).join('');
  const header = getBonHeader(`${L.bonAchat} ${L.num}BON-${String(a.num).padStart(4,'0')}`, a.num, [
    `${L.date}: ${date.toLocaleDateString(L.dateLocale)}`,
    a.supplier?`${L.supplier}: ${a.supplier}`:'',
  ]);
  const table = `<table dir="${L.dir}" style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;">
    <thead><tr style="background:var(--green-main);color:#fff;">${cols}</tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
  const totalRow = `<div dir="${L.dir}" style="display:flex;justify-content:flex-end;margin-top:12px;">
    <div style="width:220px;background:var(--green-glow);border-radius:8px;padding:12px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:var(--green-dark);">
        <span>${L.totalPay}</span><span>${a.total.toFixed(2)} DH</span>
      </div>
    </div>
  </div>`;
  doPrint(header+table+totalRow+getBonFooter());
}

// ─── RETURN MULTI-PRODUCTS ──────────────────────────────────
function initReturnForm() {
  const rd=document.getElementById('ret-date');if(rd&&!rd.value)rd.value=new Date().toISOString().split('T')[0];
  const dl=document.getElementById('ret-client-datalist');if(dl)dl.innerHTML=clients.map(c=>`<option value="${c.name}">`).join('');
  const pdl=document.getElementById('ret-product-datalist');if(pdl)pdl.innerHTML=products.map(p=>`<option value="${p.name}">`).join('')+products.map(p=>`<option value="${p.code}">`).join('');
  renderReturnLines();
}
function calcRetProductPrice() {
  const n=document.getElementById('ret-product-name').value.trim().toLowerCase();
  const q=parseFloat(document.getElementById('ret-qty').value)||0;
  const p=products.find(x=>x.name.toLowerCase()===n||x.code.toLowerCase()===n);
  const manualPrice = parseFloat(document.getElementById('ret-unit-price')?.value)||0;
  // Auto-fill price field if product found and price field is empty
  if(p && (!document.getElementById('ret-unit-price')?.value || document.getElementById('ret-unit-price').value==='')) {
    if(document.getElementById('ret-unit-price')) document.getElementById('ret-unit-price').value = p.price;
  }
  const usePrice = manualPrice > 0 ? manualPrice : (p ? p.price : 0);
  const pr=document.getElementById('ret-product-price-preview');
  if(pr)pr.textContent=usePrice>0&&q>0?(usePrice*q).toFixed(2)+' DH':'0.00 DH';
}
function addReturnProduct() {
  const name=document.getElementById('ret-product-name').value.trim();
  const qty=parseFloat(document.getElementById('ret-qty').value)||0;
  const manualPrice=parseFloat(document.getElementById('ret-unit-price')?.value)||0;
  if(!name||qty<=0){showAlert('⚠️ Produit et quantité requis','danger');return;}
  const p=products.find(x=>x.name.toLowerCase()===name.toLowerCase()||x.code.toLowerCase()===name.toLowerCase());
  const usePrice = manualPrice > 0 ? manualPrice : (p ? p.price : 0);
  returnLines.push({name:p?p.name:name,code:p?p.code:'MANUEL',qty,price:usePrice,total:usePrice*qty});
  document.getElementById('ret-product-name').value='';
  document.getElementById('ret-qty').value='';
  if(document.getElementById('ret-unit-price'))document.getElementById('ret-unit-price').value='';
  const pr=document.getElementById('ret-product-price-preview');if(pr)pr.textContent='0.00 DH';
  playBeep();renderReturnLines();
}
function removeReturnLine(i){returnLines.splice(i,1);renderReturnLines();}
function renderReturnLines() {
  const el=document.getElementById('ret-products-list');if(!el)return;
  const total=returnLines.reduce((s,l)=>s+l.total,0);
  if(!returnLines.length){el.innerHTML='<div style="text-align:center;padding:12px;color:var(--gray-600);font-size:12px;">Aucun produit ajouté</div>';}
  else{el.innerHTML='<table class="data-table" style="margin-top:0;"><thead><tr><th>Produit</th><th>Qté</th><th>Prix Vente</th><th>Total</th><th></th></tr></thead><tbody>'+returnLines.map((l,i)=>`<tr><td><strong>${l.name}</strong></td><td>${l.qty}</td><td style="color:var(--green-mid);font-weight:700;">${(l.price||0).toFixed(2)} DH</td><td style="color:var(--red);font-weight:800;">${l.total.toFixed(2)} DH</td><td><button onclick="removeReturnLine(${i})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:3px 8px;cursor:pointer;">✕</button></td></tr>`).join('')+'</tbody></table>';}
  const ta=document.getElementById('ret-amount');if(ta)ta.textContent=total.toFixed(2)+' DH';
  applyManualUiTranslations();
}
function retOpTypeChange() { /* UI feedback only */ }
function cancelReturn() {
  if(!returnLines.length && !document.getElementById('ret-client-name')?.value) return;
  if(!confirm('Annuler le retour en cours ?')) return;
  returnLines=[];
  if(document.getElementById('ret-client-name'))document.getElementById('ret-client-name').value='';
  if(document.getElementById('ret-product-name'))document.getElementById('ret-product-name').value='';
  if(document.getElementById('ret-qty'))document.getElementById('ret-qty').value='';
  if(document.getElementById('ret-unit-price'))document.getElementById('ret-unit-price').value='';
  const radios=document.querySelectorAll('input[name="ret-op-type"]');radios.forEach(r=>{if(r.value==='vente')r.checked=true;});
  renderReturnLines();
  showAlert('✅ Retour annulé','success');
}
function saveReturn() {
  if(!returnLines.length){showAlert('Ajoutez au moins un produit','danger');return;}
  const clientName=document.getElementById('ret-client-name')?.value.trim()||'—';
  const retDate=document.getElementById('ret-date')?.value||new Date().toISOString().split('T')[0];
  const opTypeEl=document.querySelector('input[name="ret-op-type"]:checked');
  const opType=opTypeEl?opTypeEl.value:'vente'; // 'vente' ou 'achat'
  const num=returnCounter++;
  const total=returnLines.reduce((s,l)=>s+l.total,0);
  // Restock if retour de vente
  if(opType==='vente'){
    returnLines.forEach(l=>{const p=products.find(x=>x.code===l.code);if(p&&l.code!=='MANUEL')p.stock+=l.qty;});
  }
  returns.push({num,date:new Date(retDate).toISOString(),clientName,opType,lines:[...returnLines],total,refund:total});
  // Add retour operation for registered client (only for vente retour)
  if(opType==='vente'){
    const retClientName = document.getElementById('ret-client-name')?.value.trim()||'';
    _addRetourOperation(retClientName, total, num);
  }
  save();playBeep();
  showAlert('Retour N°'+num+' enregistré','success');
  if(confirm('Imprimer le bon de retour ?'))printReturnSlipByNum(num);
  returnLines=[];renderReturnLines();renderReturnsHistory();renderPosGrid();
  document.getElementById('ret-client-name').value='';
  if(document.getElementById('ret-unit-price'))document.getElementById('ret-unit-price').value='';
  const radios=document.querySelectorAll('input[name="ret-op-type"]');radios.forEach(r=>{if(r.value==='vente')r.checked=true;});
  document.getElementById('ret-amount').textContent='0.00 DH';
  checkStockAlerts();
}
function printCurrentReturnSlip(){
  if(!returnLines.length){showAlert('⚠️ Aucun produit','danger');return;}
  const cn=document.getElementById('ret-client-name')?.value.trim()||'—';
  const rd=document.getElementById('ret-date')?.value||new Date().toISOString().split('T')[0];
  _printBonRetourMulti({num:'APERÇU',date:new Date(rd).toISOString(),clientName:cn,lines:returnLines,total:returnLines.reduce((s,l)=>s+l.total,0)});
}
function renderReturnsHistory(q='') {
  const list=q?returns.filter(r=>(r.clientName||'').toLowerCase().includes(q)||String(r.num).includes(q)):returns;
  const tb=document.getElementById('returns-table');if(!tb)return;
  const locale=t('lang')||'fr-FR';
  tb.innerHTML=[...list].reverse().slice(0,30).map(r=>{
    const lines=r.lines||[{name:r.name||'—',qty:r.qty||0,total:r.refund||0}];
    return`<tr><td><label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" class="returns-row-chk" data-num="${r.num}"><strong>${r.num}</strong></label></td><td>${new Date(r.date||Date.now()).toLocaleDateString(locale)}</td><td>${r.clientName||'—'}</td><td style="font-size:11px;">${lines.map(l=>l.name).join(', ')}</td><td style="color:var(--red);font-weight:800;">${(r.total||r.refund||0).toFixed(2)} DH</td><td><div style="display:flex;gap:6px;justify-content:center;"><button onclick="printReturnSlipByNum(${JSON.stringify(r.num)})" style="padding:4px 10px;border:none;border-radius:6px;background:#ffebee;color:#c62828;font-weight:700;cursor:pointer;font-size:12px;">🖨️</button><button onclick="deleteSingleReturnEntry(${JSON.stringify(r.num)})" title="${t('confirmDelete')}" style="padding:4px 10px;border:none;border-radius:6px;background:#ffebee;color:#c62828;font-weight:700;cursor:pointer;font-size:12px;">🗑️</button></div></td></tr>`;
  }).join('')||'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:20px;">Aucun retour</td></tr>';
  const returnsSelectAll=document.getElementById('returns-select-all-visible');
  if(returnsSelectAll) returnsSelectAll.checked=false;
  applyManualUiTranslations();
  updateReturnsHistoryActions();
}
function filterReturns(){renderReturnsHistory(document.getElementById('ret-search')?.value.trim().toLowerCase()||'');}
function printReturnSlipByNum(num){const r=returns.find(x=>x.num===num);if(r)_printBonRetourMulti(r);}
function _printBonRetourMulti(r) {
  const L = getTicketLabels();
  const date = new Date(r.date||Date.now());
  const lines = r.lines||[{name:r.name||'—',qty:r.qty||0,price:r.price||0,total:r.refund||0}];
  const total = r.total||r.refund||0;
  const cols = L.dir==='rtl'
    ? `<th style="padding:8px 10px;text-align:right;">${L.total}</th><th style="padding:8px 10px;text-align:center;">${L.unitPrice}</th><th style="padding:8px 10px;text-align:center;">${L.qty}</th><th style="padding:8px 10px;text-align:right;">${L.product}</th>`
    : `<th style="padding:8px 10px;text-align:left;">${L.product}</th><th style="padding:8px 10px;text-align:center;">${L.qty}</th><th style="padding:8px 10px;text-align:right;">${L.unitPrice}</th><th style="padding:8px 10px;text-align:right;">${L.total}</th>`;
  const rows = lines.map(l=>`<tr>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.name}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:center;">${l.qty}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;">${(l.price||0).toFixed(2)} DH</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;color:#c62828;">${(l.total||0).toFixed(2)} DH</td>
  </tr>`).join('');
  const header = getBonHeader(`${L.bonRetour} ${L.num}${r.num}`, r.num, [
    `${L.date}: ${date.toLocaleDateString(L.dateLocale)} ${date.toLocaleTimeString(L.dateLocale,{hour:'2-digit',minute:'2-digit'})}`,
    r.clientName?`${L.client}: ${r.clientName}`:'',
  ]);
  const table = `<table dir="${L.dir}" style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;">
    <thead><tr style="background:#c62828;color:#fff;">${cols}</tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
  const totalRow = `<div dir="${L.dir}" style="display:flex;justify-content:flex-end;margin-top:12px;">
    <div style="width:230px;background:#ffebee;border-radius:8px;padding:12px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:#c62828;">
        <span>${L.refundTotal}</span><span>${total.toFixed(2)} DH</span>
      </div>
    </div>
  </div>`;
  doPrint(header+table+totalRow+getBonFooter());
}

// ─── PARAMETRES ─────────────────────────────────────────────
function initParamForm() {
  const co=companyInfo;
  const s=id=>v=>{const el=document.getElementById(id);if(el)el.value=v;};
  s('param-company-name')(co.name||'');s('param-company-addr')(co.addr||'');s('param-company-tel')(co.tel||'');
  if(logoData){const lp=document.getElementById('logo-preview');if(lp){lp.src=logoData;lp.style.display='block';const ph=document.getElementById('logo-upload-ph');if(ph)ph.style.display='none';}}
  const ci=document.getElementById('param-color');if(ci)ci.value=localStorage.getItem('asil_color')||'#22a355';
  const th=localStorage.getItem('asil_theme')||'matin';
  document.getElementById('theme-matin')?.classList.toggle('active',th==='matin');
  document.getElementById('theme-soir')?.classList.toggle('active',th==='soir');
  const st=localStorage.getItem('asil_sound')||'beep';
  document.querySelectorAll('input[name="sound-type"]').forEach(r=>{if(r.value===st)r.checked=true;});
  setTimeout(initSignatureCanvas,100);
  refreshTicketPreview();
  updateEraseZoneCounts();
  renderTrash();
}
function paramChangePw(){
  const cur=document.getElementById('param-pw-cur').value;
  const nw=document.getElementById('param-pw-new').value;
  const cf=document.getElementById('param-pw-conf').value;
  if(cur!==APP_PW){showAlert('❌ Mot de passe actuel incorrect','danger');return;}
  if(nw!==cf){showAlert('❌ Les mots de passe ne correspondent pas','danger');return;}
  if(nw.length<4){showAlert('❌ Minimum 4 caractères','danger');return;}
  APP_PW=nw;localStorage.setItem('asil_pw',nw);
  scheduleIndexedSave();
  ['param-pw-cur','param-pw-new','param-pw-conf'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  showAlert('✅ Mot de passe modifié','success');
}
function saveCompanyInfo(){
  companyInfo={name:document.getElementById('param-company-name').value.trim()||'ASIL CAISSE',addr:document.getElementById('param-company-addr').value.trim(),tel:document.getElementById('param-company-tel').value.trim()};
  localStorage.setItem('asil_company',JSON.stringify(companyInfo));
  scheduleIndexedSave();
  const sb=document.querySelector('.sidebar-brand');if(sb)sb.innerHTML=companyInfo.name+'<span>Point de Vente Pro</span>';
  document.title=companyInfo.name+' — Logiciel de Caisse';
  refreshTicketPreview();
  showAlert('✅ Informations société enregistrées','success');
}
function previewLogo(e){
  const f=e.target.files[0];if(!f)return;
  if(f.size>2*1024*1024){showAlert('❌ Image max 2MB','danger');return;}
  const r=new FileReader();
  r.onload=ev=>{logoData=ev.target.result;localStorage.setItem('asil_logo',logoData);scheduleIndexedSave();const lp=document.getElementById('logo-preview');if(lp){lp.src=logoData;lp.style.display='block';}const ph=document.getElementById('logo-upload-ph');if(ph)ph.style.display='none';refreshTicketPreview();showAlert('✅ Logo enregistré','success');};
  r.readAsDataURL(f);
}
function setTheme(t){
  localStorage.setItem('asil_theme',t);
  document.body.classList.toggle('dark-mode',t==='soir');
  document.getElementById('theme-matin')?.classList.toggle('active',t==='matin');
  document.getElementById('theme-soir')?.classList.toggle('active',t==='soir');
  scheduleIndexedSave();
}
// ─── COLOR PALETTE ENGINE ──────────────────────────────────
function hexToRgb(hex) {
  const h = hex.replace('#','');
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}
function rgbToHex(r,g,b) {
  return '#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
}
function darkenColor(hex, pct) {
  const [r,g,b] = hexToRgb(hex);
  return rgbToHex(r*(1-pct), g*(1-pct), b*(1-pct));
}
function lightenColor(hex, pct) {
  const [r,g,b] = hexToRgb(hex);
  return rgbToHex(r+(255-r)*pct, g+(255-g)*pct, b+(255-b)*pct);
}
function applyCustomColor(c) {
  const dark    = darkenColor(c, 0.55);
  const mid     = darkenColor(c, 0.22);
  const light   = lightenColor(c, 0.22);
  const [r,g,b] = hexToRgb(c);
  const glow    = `rgba(${r},${g},${b},0.18)`;
  const sbBg    = darkenColor(c, 0.72);
  const root    = document.documentElement;
  root.style.setProperty('--green-dark',   dark);
  root.style.setProperty('--green-mid',    mid);
  root.style.setProperty('--green-main',   c);
  root.style.setProperty('--green-light',  light);
  root.style.setProperty('--green-glow',   glow);
  root.style.setProperty('--sidebar-bg',   sbBg);
  localStorage.setItem('asil_color', c);
  // Update color picker input if open
  const ci = document.getElementById('param-color');
  if(ci && ci.value !== c) ci.value = c;
  // Refresh ticket preview palette
  refreshTicketPreview();
}
function resetColor() {
  const ci = document.getElementById('param-color');
  if(ci) ci.value = '#22a355';
  applyCustomColor('#22a355');
}
let sigCanvas=null,sigCtx=null,sigDrawing=false;
function initSignatureCanvas(){
  sigCanvas=document.getElementById('signature-canvas');if(!sigCanvas)return;
  sigCtx=sigCanvas.getContext('2d');
  if(signatureData){const img=new Image();img.onload=()=>sigCtx.drawImage(img,0,0,sigCanvas.width,sigCanvas.height);img.src=signatureData;}
  sigCanvas.onmousedown=e=>{sigDrawing=true;sigCtx.beginPath();const r=sigCanvas.getBoundingClientRect();sigCtx.moveTo((e.clientX-r.left)*(sigCanvas.width/r.width),(e.clientY-r.top)*(sigCanvas.height/r.height));};
  sigCanvas.onmousemove=e=>{if(!sigDrawing)return;const r=sigCanvas.getBoundingClientRect();sigCtx.lineTo((e.clientX-r.left)*(sigCanvas.width/r.width),(e.clientY-r.top)*(sigCanvas.height/r.height));sigCtx.strokeStyle='#0f4c2a';sigCtx.lineWidth=2;sigCtx.lineCap='round';sigCtx.stroke();};
  sigCanvas.onmouseup=sigCanvas.onmouseleave=()=>{sigDrawing=false;};
  sigCanvas.ontouchstart=e=>{e.preventDefault();sigDrawing=true;sigCtx.beginPath();const t=e.touches[0];const r=sigCanvas.getBoundingClientRect();sigCtx.moveTo((t.clientX-r.left)*(sigCanvas.width/r.width),(t.clientY-r.top)*(sigCanvas.height/r.height));};
  sigCanvas.ontouchmove=e=>{e.preventDefault();if(!sigDrawing)return;const t=e.touches[0];const r=sigCanvas.getBoundingClientRect();sigCtx.lineTo((t.clientX-r.left)*(sigCanvas.width/r.width),(t.clientY-r.top)*(sigCanvas.height/r.height));sigCtx.strokeStyle='#0f4c2a';sigCtx.lineWidth=2;sigCtx.lineCap='round';sigCtx.stroke();};
  sigCanvas.ontouchend=()=>{sigDrawing=false;};
}
function saveSignature(){if(!sigCanvas)return;signatureData=sigCanvas.toDataURL();localStorage.setItem('asil_signature',signatureData);scheduleIndexedSave();showAlert('✅ Signature enregistrée','success');}
function clearSignature(){if(!sigCtx||!sigCanvas)return;sigCtx.clearRect(0,0,sigCanvas.width,sigCanvas.height);signatureData=null;localStorage.removeItem('asil_signature');scheduleIndexedSave();}


// ─── CLIENT DETAIL & PAYMENT ────────────────────────────────
let currentClientId = null;
let currentSupplierId = null;

function getClientCredit(clientId) {
  const ops = operations.filter(o=>o.clientId===clientId);
  // Total ventes = crédits only (payMode==='credit')
  const ventesOps = ops.filter(o=>o.type==='vente');
  const ventes  = ventesOps.reduce((s,o)=>s+o.montant,0);
  const paie    = ops.filter(o=>o.type==='paiement').reduce((s,o)=>s+o.montant,0);
  const rets    = ops.filter(o=>o.type==='retour').reduce((s,o)=>s+o.montant,0);
  return {ventes, paie, rets, credit: ventes - paie - rets};
}

function openClientDetail(clientId) {
  currentClientId = clientId;
  const c = clients.find(x=>x.id===clientId);
  if(!c) return;
  const panel = document.getElementById('client-detail-panel');
  if(panel) { panel.style.display='block'; panel.scrollIntoView({behavior:'smooth',block:'start'}); }
  renderClientOps();
  document.getElementById('client-detail-title').textContent=mt('clientFile','Dossier Client')+' — '+c.name;
}

function closeClientDetail() {
  currentClientId=null;
  const panel=document.getElementById('client-detail-panel');
  if(panel) panel.style.display='none';
}
function renderClientOps() {
  if(!currentClientId) return;
  const {ventes,paie,rets,credit} = getClientCredit(currentClientId);
  const se=id=>v=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  se('cd-ventes')(ventes.toFixed(2)+' DH');
  se('cd-paie')(paie.toFixed(2)+' DH');
  se('cd-retours')(rets.toFixed(2)+' DH');
  const creditEl=document.getElementById('cd-credit');
  if(creditEl){ creditEl.textContent=credit.toFixed(2)+' DH'; creditEl.style.color=credit>0?'#c62828':'#2e7d32'; }

  const allOps = operations.filter(o=>o.clientId===currentClientId);
  const locale = t('lang') || 'fr-FR';
  const fmtDate = d => { const x=new Date(d); return x.toLocaleDateString(locale)+' '+x.toLocaleTimeString(locale,{hour:'2-digit',minute:'2-digit'}); };

  // TABLE VENTES (newest first, credit only)
  const ventesOps = allOps.filter(o=>o.type==='vente').sort((a,b)=>new Date(b.date)-new Date(a.date));
  const vtbody = document.getElementById('cd-ventes-table');
  if(vtbody) vtbody.innerHTML = ventesOps.length ? ventesOps.map(op=>`<tr>
    <td>${fmtDate(op.date)}</td>
    <td style="font-size:12px;color:var(--red);">${op.reference||'—'}</td>
    <td style="font-weight:800;color:var(--red);">+${op.montant.toFixed(2)} DH</td>
  </tr>`).join('') : `<tr><td colspan="3" style="text-align:center;color:#888;padding:14px;">${mt('noCreditSales','Aucune vente a credit')}</td></tr>`;

  // TABLE PAIEMENTS (newest first) — remarque au lieu de référence
  const paieOps = allOps.filter(o=>o.type==='paiement').sort((a,b)=>new Date(b.date)-new Date(a.date));
  const ptbody = document.getElementById('cd-paie-table');
  if(ptbody) ptbody.innerHTML = paieOps.length ? paieOps.map(op=>`<tr>
    <td>${fmtDate(op.date)}</td>
    <td style="font-size:12px;"><span style="background:#e8f5e9;border-radius:6px;padding:3px 8px;color:#2e7d32;">${op.reference||'—'}</span></td>
    <td style="font-weight:800;color:#2e7d32;">-${op.montant.toFixed(2)} DH</td>
  </tr>`).join('') : `<tr><td colspan="3" style="text-align:center;color:#888;padding:14px;">${mt('noPayments','Aucun paiement')}</td></tr>`;

  // TABLE RETOURS (newest first, avec produits retournés)
  const retOps = allOps.filter(o=>o.type==='retour').sort((a,b)=>new Date(b.date)-new Date(a.date));
  const rtbody = document.getElementById('cd-ret-table');
  if(rtbody) rtbody.innerHTML = retOps.length ? retOps.map(op=>{
    // Find matching return
    const matchRet = returns.find(r=>r.clientName===clients.find(c=>c.id===currentClientId)?.name && 'Retour N°'+r.num===op.reference);
    const prodsList = matchRet ? matchRet.lines.map(l=>`${l.qty}× ${l.name}`).join(', ') : '—';
    return `<tr>
      <td>${fmtDate(op.date)}</td>
      <td style="font-size:12px;color:#f57c00;">${op.reference||'—'}</td>
      <td style="font-size:11px;color:var(--gray-600);">${prodsList}</td>
      <td style="font-weight:800;color:#f57c00;">-${op.montant.toFixed(2)} DH</td>
    </tr>`;
  }).join('') : `<tr><td colspan="4" style="text-align:center;color:#888;padding:14px;">${mt('noReturns','Aucun retour')}</td></tr>`;
  applyManualUiTranslations();
}

function printClientSection(section) {
  if(!currentClientId) return;
  const c = clients.find(x=>x.id===currentClientId);
  if(!c) return;
  const L = getTicketLabels();
  const allOps = operations.filter(o=>o.clientId===currentClientId);
  const fmtDate = d => new Date(d).toLocaleDateString(L.dateLocale)+' '+new Date(d).toLocaleTimeString(L.dateLocale,{hour:'2-digit',minute:'2-digit'});
  let title='', rows='', total=0, color='var(--green-main)';
  if(section==='ventes') {
    title='Ventes à Crédit'; color='#c62828';
    const ops = allOps.filter(o=>o.type==='vente').sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = ops.reduce((s,o)=>s+o.montant,0);
    rows = ops.map(op=>`<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(op.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${op.reference||'—'}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">+${op.montant.toFixed(2)} DH</td></tr>`).join('');
  } else if(section==='paiements') {
    title='Paiements'; color='#2e7d32';
    const ops = allOps.filter(o=>o.type==='paiement').sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = ops.reduce((s,o)=>s+o.montant,0);
    rows = ops.map(op=>`<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(op.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;"><span style="background:#e8f5e9;border-radius:6px;padding:2px 8px;color:#2e7d32;">${op.reference||'—'}</span></td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">-${op.montant.toFixed(2)} DH</td></tr>`).join('');
  } else {
    title='Retours'; color='#f57c00';
    const ops = allOps.filter(o=>o.type==='retour').sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = ops.reduce((s,o)=>s+o.montant,0);
    rows = ops.map(op=>{
      const matchRet = returns.find(r=>r.clientName===c.name && 'Retour N°'+r.num===op.reference);
      const prods = matchRet ? matchRet.lines.map(l=>`${l.qty}× ${l.name}`).join(', ') : '—';
      return `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(op.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${op.reference||'—'}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:11px;color:#888;">${prods}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">-${op.montant.toFixed(2)} DH</td></tr>`;
    }).join('');
  }
  const header = getBonHeader(`${title} — ${c.name}`, '', [`👤 ${c.name}`, c.phone?`📞 ${c.phone}`:'']);
  const colCount = section==='retours' ? 4 : 3;
  const table = `<table style="width:100%;border-collapse:collapse;font-size:13px;"><thead><tr style="background:${color};color:#fff;"><th style="padding:8px 10px;">Date</th><th style="padding:8px 10px;">${section==='paiements'?'Remarque':'Référence'}</th>${section==='retours'?'<th style="padding:8px 10px;">Produits</th>':''}<th style="padding:8px 10px;text-align:right;">Montant</th></tr></thead><tbody>${rows}</tbody></table>`;
  const totalRow = `<div style="display:flex;justify-content:flex-end;margin-top:12px;"><div style="background:#f5f5f5;border-radius:8px;padding:12px;min-width:200px;display:flex;justify-content:space-between;font-weight:900;font-size:16px;color:${color};"><span>TOTAL</span><span>${total.toFixed(2)} DH</span></div></div>`;
  doPrint(header+table+totalRow+getBonFooter());
}

function saveClientPayment() {
  if(!currentClientId){ showAlert('Sélectionnez un client','danger'); return; }
  const amount = parseFloat(document.getElementById('pay-amount').value)||0;
  const note   = document.getElementById('pay-note').value.trim();
  if(amount<=0){ showAlert('⚠️ Montant invalide','danger'); return; }
  operations.push({
    id:'OP'+Date.now(),
    clientId: currentClientId,
    type:'paiement',
    montant: amount,
    date: new Date().toISOString(),
    reference: note||'Paiement client'
  });
  document.getElementById('pay-amount').value='';
  document.getElementById('pay-note').value='';
  save(); playBeep();
  renderClientOps();
  renderClientsTable();
  showAlert('✅ Paiement enregistré','success');
}

// ─── SUPPLIER DETAIL & PAYMENT ──────────────────────────────
function openSupplierDetail(supplierId) {
  currentSupplierId = supplierId;
  const s = suppliers.find(x=>x.id===supplierId);
  if(!s) return;
  const panel=document.getElementById('supplier-detail-panel');
  if(panel){ panel.style.display='block'; panel.scrollIntoView({behavior:'smooth',block:'start'}); }
  renderSupplierOps();
  document.getElementById('supplier-detail-title').textContent=mt('supplierFile','Dossier Fournisseur')+' — '+s.name;
}

function closeSupplierDetail() {
  currentSupplierId=null;
  const panel=document.getElementById('supplier-detail-panel');
  if(panel) panel.style.display='none';
}

function renderSupplierOps() {
  if(!currentSupplierId) return;
  const s = suppliers.find(x=>x.id===currentSupplierId);
  if(!s) return;
  const sAchats = achats.filter(a=>(a.supplier||'').toLowerCase()===(s.name||'').toLowerCase()).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const totalA  = sAchats.reduce((sum,a)=>sum+a.total,0);
  const sOps    = operations.filter(o=>o.supplierId===currentSupplierId&&o.type==='paiement-fournisseur').sort((a,b)=>new Date(b.date)-new Date(a.date));
  const totalP  = sOps.reduce((sum,o)=>sum+o.montant,0);
  const sRets   = operations.filter(o=>o.supplierId===currentSupplierId&&o.type==='retour-fournisseur').sort((a,b)=>new Date(b.date)-new Date(a.date));
  const totalR  = sRets.reduce((sum,o)=>sum+o.montant,0);
  const du      = totalA - totalP - totalR;
  const se=id=>v=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  se('sd-achats')(totalA.toFixed(2)+' DH');
  se('sd-paie')(totalP.toFixed(2)+' DH');
  se('sd-ret-total')(totalR.toFixed(2)+' DH');
  const duEl=document.getElementById('sd-du');
  if(duEl){ duEl.textContent=du.toFixed(2)+' DH'; duEl.style.color=du>0?'#c62828':'#2e7d32'; }

  const locale = t('lang') || 'fr-FR';
  const fmtDate = d => { const x=new Date(d); return x.toLocaleDateString(locale)+' '+x.toLocaleTimeString(locale,{hour:'2-digit',minute:'2-digit'}); };

  // TABLE ACHATS (newest first)
  const atbody = document.getElementById('sd-achats-table');
  if(atbody) atbody.innerHTML = sAchats.length ? sAchats.map(a=>`<tr>
    <td>${fmtDate(a.date)}</td>
    <td style="font-size:12px;color:#1565c0;">${a.bonRef||'BON-'+String(a.num).padStart(4,'0')}</td>
    <td style="font-weight:800;color:#1565c0;">+${a.total.toFixed(2)} DH</td>
  </tr>`).join('') : `<tr><td colspan="3" style="text-align:center;color:#888;padding:14px;">${mt('noPurchases','Aucun achat')}</td></tr>`;

  // TABLE PAIEMENTS (newest first) — remarque
  const ptbody = document.getElementById('sd-paie-table');
  if(ptbody) ptbody.innerHTML = sOps.length ? sOps.map(op=>`<tr>
    <td>${fmtDate(op.date)}</td>
    <td style="font-size:12px;"><span style="background:#e8f5e9;border-radius:6px;padding:3px 8px;color:#2e7d32;">${op.reference||'—'}</span></td>
    <td style="font-weight:800;color:#2e7d32;">-${op.montant.toFixed(2)} DH</td>
  </tr>`).join('') : `<tr><td colspan="3" style="text-align:center;color:#888;padding:14px;">${mt('noPayments','Aucun paiement')}</td></tr>`;

  // TABLE RETOURS (newest first)
  const rtbody = document.getElementById('sd-ret-table');
  if(rtbody) rtbody.innerHTML = sRets.length ? sRets.map(op=>`<tr>
    <td>${fmtDate(op.date)}</td>
    <td style="font-size:12px;color:#f57c00;">${op.reference||'—'}</td>
    <td style="font-weight:800;color:#f57c00;">-${op.montant.toFixed(2)} DH</td>
  </tr>`).join('') : `<tr><td colspan="3" style="text-align:center;color:#888;padding:14px;">${mt('noReturns','Aucun retour')}</td></tr>`;
  applyManualUiTranslations();
}

function saveSupplierReturn() {
  if(!currentSupplierId){ showAlert('Sélectionnez un fournisseur','danger'); return; }
  const amount = parseFloat(document.getElementById('sup-ret-amount').value)||0;
  const note   = document.getElementById('sup-ret-note').value.trim();
  if(amount<=0){ showAlert('⚠️ Montant invalide','danger'); return; }
  operations.push({
    id:'OP'+Date.now(),
    supplierId: currentSupplierId,
    type:'retour-fournisseur',
    montant: amount,
    date: new Date().toISOString(),
    reference: note||'Retour fournisseur'
  });
  document.getElementById('sup-ret-amount').value='';
  document.getElementById('sup-ret-note').value='';
  save(); playBeep();
  renderSupplierOps();
  showAlert('✅ Retour fournisseur enregistré','success');
}

function printSupplierSection(section) {
  if(!currentSupplierId) return;
  const s = suppliers.find(x=>x.id===currentSupplierId);
  if(!s) return;
  const L = getTicketLabels();
  const fmtDate = d => new Date(d).toLocaleDateString(L.dateLocale)+' '+new Date(d).toLocaleTimeString(L.dateLocale,{hour:'2-digit',minute:'2-digit'});
  let title='', rows='', total=0, color='#1565c0';
  if(section==='achats') {
    title='Achats';
    const items = achats.filter(a=>(a.supplier||'').toLowerCase()===(s.name||'').toLowerCase()).sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = items.reduce((sum,a)=>sum+a.total,0);
    rows = items.map(a=>`<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(a.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${a.bonRef||'BON-'+String(a.num).padStart(4,'0')}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">+${a.total.toFixed(2)} DH</td></tr>`).join('');
  } else if(section==='paiements') {
    title='Paiements'; color='#2e7d32';
    const ops = operations.filter(o=>o.supplierId===currentSupplierId&&o.type==='paiement-fournisseur').sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = ops.reduce((sum,o)=>sum+o.montant,0);
    rows = ops.map(op=>`<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(op.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;"><span style="background:#e8f5e9;border-radius:6px;padding:2px 8px;color:#2e7d32;">${op.reference||'—'}</span></td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">-${op.montant.toFixed(2)} DH</td></tr>`).join('');
  } else {
    title='Retours Fournisseur'; color='#f57c00';
    const ops = operations.filter(o=>o.supplierId===currentSupplierId&&o.type==='retour-fournisseur').sort((a,b)=>new Date(b.date)-new Date(a.date));
    total = ops.reduce((sum,o)=>sum+o.montant,0);
    rows = ops.map(op=>`<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${fmtDate(op.date)}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${op.reference||'—'}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:800;color:${color};">-${op.montant.toFixed(2)} DH</td></tr>`).join('');
  }
  const header = getBonHeader(`${title} — ${s.name}`, '', [`🏭 ${s.name}`, s.phone?`📞 ${s.phone}`:'']);
  const table = `<table style="width:100%;border-collapse:collapse;font-size:13px;"><thead><tr style="background:${color};color:#fff;"><th style="padding:8px 10px;">Date</th><th style="padding:8px 10px;">${section==='paiements'?'Remarque':'Référence'}</th><th style="padding:8px 10px;text-align:right;">Montant</th></tr></thead><tbody>${rows}</tbody></table>`;
  const totalRow = `<div style="display:flex;justify-content:flex-end;margin-top:12px;"><div style="background:#f5f5f5;border-radius:8px;padding:12px;min-width:200px;display:flex;justify-content:space-between;font-weight:900;font-size:16px;color:${color};"><span>TOTAL</span><span>${total.toFixed(2)} DH</span></div></div>`;
  doPrint(header+table+totalRow+getBonFooter());
}

function saveSupplierPayment() {
  if(!currentSupplierId){ showAlert('Sélectionnez un fournisseur','danger'); return; }
  const amount = parseFloat(document.getElementById('sup-pay-amount').value)||0;
  const note   = document.getElementById('sup-pay-note').value.trim();
  if(amount<=0){ showAlert('⚠️ Montant invalide','danger'); return; }
  operations.push({
    id:'OP'+Date.now(),
    supplierId: currentSupplierId,
    type:'paiement-fournisseur',
    montant: amount,
    date: new Date().toISOString(),
    reference: note||'Paiement fournisseur'
  });
  document.getElementById('sup-pay-amount').value='';
  document.getElementById('sup-pay-note').value='';
  save(); playBeep();
  renderSupplierOps();
  renderSuppliersTable();
  showAlert('✅ Paiement fournisseur enregistré','success');
}

// ─── RETURN adds retour operation ───────────────────────────
function _addRetourOperation(clientName, total, retNum) {
  const c = clients.find(x=>x.name.toLowerCase()===clientName.toLowerCase());
  if(c) {
    operations.push({
      id:'OP'+Date.now(),
      clientId: c.id,
      type:'retour',
      montant: total,
      date: new Date().toISOString(),
      reference: 'Retour N°'+retNum
    });
  }
}

// ─── CORBEILLE ────────────────────────────────────────────
function recoverTrash(idx) {
  const entry = trash[idx];
  if(!entry) return;
  if(entry.type==='client') { clients.push(entry.item); loadClientOptions(); renderClientsTable(); }
  else if(entry.type==='supplier') { suppliers.push(entry.item); renderSuppliersTable(); }
  else if(entry.type==='product') { products.push(entry.item); renderProductTable(); renderInventory(); renderPosGrid(); loadProductOptions(); }
  trash.splice(idx, 1);
  save(); renderTrash(); showAlert(`✅ ${mt('trashRecoveredAlert','Element recupere')}`,'success');
}
function emptyTrash() {
  if(!confirm(`⚠️ ${mt('trashEmptyConfirm','Vider definitivement la corbeille ?')}`)) return;
  trash = []; save(); renderTrash(); showAlert(`🗑️ ${mt('trashEmptiedAlert','Corbeille videe')}`,'success');
}
function renderTrash() {
  const el = document.getElementById('trash-list');
  if(!el) return;
  const badge = document.getElementById('trash-badge');
  if(badge) badge.textContent = trash.length ? '('+trash.length+')' : '';
  if(!trash.length) { el.innerHTML=`<div style="text-align:center;padding:20px;color:#888;">${mt('trashEmpty','Corbeille vide ✅')}</div>`; return; }
  const locale = currentLang==='ar' ? 'ar-MA' : currentLang==='en' ? 'en-US' : 'fr-FR';
  el.innerHTML = trash.map((e,i)=>`<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--gray-50);border-radius:8px;margin-bottom:6px;">
    <span style="font-size:20px;">${e.type==='client'?'👤':e.type==='supplier'?'🏭':'📦'}</span>
    <div style="flex:1;">
      <div style="font-weight:700;">${e.item.name}</div>
      <div style="font-size:11px;color:#888;">${e.type==='client' ? mt('trashTypeClient','Client') : e.type==='supplier' ? mt('trashTypeSupplier','Fournisseur') : mt('trashTypeProduct','Produit')} — ${mtf('trashDeletedOn','supprime le {date}',{ date: new Date(e.date).toLocaleDateString(locale) })}</div>
    </div>
    <button onclick="recoverTrash(${i})" style="border:none;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:6px 12px;font-weight:700;cursor:pointer;font-size:12px;">↺ ${mt('paramRecoverBtn','Recuperer')}</button>
  </div>`).join('');
}
// ─── EFFACEMENT PAR ZONE ──────────────────────────────────
function updateEraseZoneCounts() {
  const now=new Date(); const mn=now.getMonth(); const yr=now.getFullYear();
  const inMonth=d=>{const x=new Date(d);return x.getMonth()===mn&&x.getFullYear()===yr;};
  const vc=document.getElementById('erase-ventes-count');
  if(vc){
    const count = sales.length;
    vc.textContent = mtf('eraseCountSales','{count} lignes dans l\'historique des ventes',{ count });
  }
  const rc=document.getElementById('erase-retours-count');
  if(rc){
    const count = returns.length;
    rc.textContent = mtf('eraseCountReturns','{count} lignes dans l\'historique des retours',{ count });
  }
  const ac=document.getElementById('erase-achats-count');
  if(ac){
    const count = achats.filter(a=>inMonth(a.date)).length;
    ac.textContent = mtf('eraseCountPurchases','{count} achats ce mois',{ count });
  }
  const oc=document.getElementById('erase-ops-count');
  if(oc){
    const count = operations.filter(o=>inMonth(o.date)).length;
    oc.textContent = mtf('eraseCountOperations','{count} operations ce mois',{ count });
  }
  updateSalesHistoryActions();
  updateReturnsHistoryActions();
}

function refreshZoneAfterMutation(zone) {
  if(zone==='ventes') renderSalesTable(document.getElementById('ventes-search')?.value.trim().toLowerCase()||'');
  else if(zone==='retours') renderReturnsHistory(document.getElementById('ret-search')?.value.trim().toLowerCase()||'');
  else if(zone==='achats') renderAchatTable(document.getElementById('achat-search')?.value.trim().toLowerCase()||'');
  else if(zone==='operations') { renderClientsTable(); renderSuppliersTable(); }
}

function eraseZone(zone) {
  if(!ERASE_ZONES.includes(zone)) return;
  const now=new Date(); const mn=now.getMonth(); const yr=now.getFullYear();
  const inMonth=d=>{const x=new Date(d);return x.getMonth()===mn&&x.getFullYear()===yr;};
  const labels={
    ventes: mt('eraseZoneSales','ventes'),
    retours: mt('eraseZoneReturns','retours'),
    achats: mt('eraseZonePurchases','achats'),
    operations: mt('eraseZoneOperations','operations clients')
  };
  const confirmMsg = zone==='ventes'
    ? mt('eraseConfirmSalesHistory','Effacer tout l\'historique des ventes ? (Recuperable)')
    : zone==='retours'
      ? mt('eraseConfirmReturnsHistory','Effacer tout l\'historique des retours ? (Recuperable)')
      : mtf('eraseConfirm','Effacer les {zone} de ce mois ? (Recuperable)',{ zone: labels[zone] });
  if(!confirm(`⚠️ ${confirmMsg}`)) return;
  let toErase=[];
  if(zone==='ventes'){toErase=[...sales];sales=[];}
  else if(zone==='retours'){toErase=[...returns];returns=[];}
  else if(zone==='achats'){toErase=achats.filter(a=>inMonth(a.date));achats=achats.filter(a=>!inMonth(a.date));}
  else if(zone==='operations'){toErase=operations.filter(o=>inMonth(o.date));operations=operations.filter(o=>!inMonth(o.date));}
  if(toErase.length){
    writeEraseBackup(zone, [...readEraseBackup(zone), ...toErase]);
  }
  save();
  refreshZoneAfterMutation(zone);
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseClearedAlert','Donnees effacees (recuperables)')}`,'success');
}
function recoverZone(zone) {
  if(!ERASE_ZONES.includes(zone)) return;
  const restored=readEraseBackup(zone);
  if(!restored.length){showAlert(`⚠️ ${mt('eraseNoBackup','Aucune sauvegarde disponible a recuperer')}`,'danger');return;}
  const recoverMsg = zone==='ventes'
    ? mt('eraseRecoverSalesHistory','Recuperer tout l\'historique des ventes ?')
    : zone==='retours'
      ? mt('eraseRecoverReturnsHistory','Recuperer tout l\'historique des retours ?')
      : mt('eraseRecoverConfirm','Recuperer toutes les donnees effacees de cette zone ?');
  if(!confirm(recoverMsg)) return;
  if(zone==='ventes') sales=[...sales,...restored];
  else if(zone==='retours') returns=[...returns,...restored];
  else if(zone==='achats') achats=[...achats,...restored];
  else if(zone==='operations') operations=[...operations,...restored];
  clearEraseBackup(zone);
  save();
  refreshZoneAfterMutation(zone);
  updateEraseZoneCounts();
  showAlert(`✅ ${mt('eraseRecoveredAlert','Donnees recuperees avec succes')}`,'success');
}






// ─── TICKET / BON HELPERS ───────────────────────────────────
function getTicketLabels() {
  const isAr = currentLang==='ar';
  const isEn = currentLang==='en';
  if(isAr) return {
    dir:'rtl', fontFamily:"Tahoma,'Arial Unicode MS',sans-serif",
    dateLocale:'ar-MA',
    saleTicket:'تذكرة البيع', invoice:'فاتورة', bonAchat:'سند الشراء',
    bonRetour:'وصل الإرجاع', bonLivraison:'وصل التسليم',
    num:'رقم', date:'التاريخ', client:'الزبون', supplier:'المورد',
    product:'المنتج', qty:'الكمية', unitPrice:'سعر الوحدة', total:'المجموع',
    totalPay:'المجموع الكلي', payMode:'طريقة الدفع', cash:'نقدا', credit:'دين',
    received:'المبلغ المستلم', change:'الباقي', thanks:'شكرا لزيارتكم',
    returnedProducts:'المنتجات المرتجعة', refundTotal:'إجمالي المبلغ المسترد',
    clientSig:'توقيع الزبون', managerSig:'توقيع المسؤول',
  };
  if(isEn) return {
    dir:'ltr', fontFamily:"'Nunito',Arial,sans-serif",
    dateLocale:'en-US',
    saleTicket:'SALE TICKET', invoice:'INVOICE', bonAchat:'PURCHASE ORDER',
    bonRetour:'RETURN SLIP', bonLivraison:'DELIVERY NOTE',
    num:'No.', date:'Date', client:'Client', supplier:'Supplier',
    product:'Product', qty:'Qty', unitPrice:'Unit Price', total:'Total',
    totalPay:'TOTAL', payMode:'Payment', cash:'Cash', credit:'Credit',
    received:'Received', change:'Change', thanks:'Thank you for your visit!',
    returnedProducts:'Returned Products', refundTotal:'Total Refunded',
    clientSig:'Client Signature', managerSig:'Manager Signature',
  };
  // Default FR
  return {
    dir:'ltr', fontFamily:"'Nunito',Arial,sans-serif",
    dateLocale:'fr-FR',
    saleTicket:'TICKET DE VENTE', invoice:'FACTURE', bonAchat:"BON D'ACHAT",
    bonRetour:'BON DE RETOUR', bonLivraison:'BON DE LIVRAISON',
    num:'N°', date:'Date', client:'Client', supplier:'Fournisseur',
    product:'Produit', qty:'Quantité', unitPrice:'Prix unitaire', total:'Total',
    totalPay:'TOTAL', payMode:'Paiement', cash:'Espèces', credit:'Crédit',
    received:'Reçu', change:'Monnaie', thanks:'Merci pour votre visite !',
    returnedProducts:'Produits retournés', refundTotal:'Total remboursé',
    clientSig:'Signature Client', managerSig:'Signature Responsable',
  };
}

function getBonHeader(title, num, extraLines=[]) {
  const L = getTicketLabels();
  const co = companyInfo;
  const logoH = logoData
    ? `<img src="${logoData}" style="max-width:90px;max-height:65px;object-fit:contain;display:block;margin-bottom:4px;">`
    : '';
  const coBlock = `
    <div style="display:flex;flex-direction:column;align-items:${L.dir==='rtl'?'flex-end':'flex-start'};">
      ${logoH}
      <div style="font-size:20px;font-weight:900;color:var(--green-main);">${co.name||'ASIL CAISSE'}</div>
      ${co.addr?`<div style="font-size:11px;color:#777;">📍 ${co.addr}</div>`:''}
      ${co.tel?`<div style="font-size:11px;color:#777;">📞 ${co.tel}</div>`:''}
    </div>`;
  const infoBlock = `
    <div style="text-align:${L.dir==='rtl'?'left':'right'};">
      <div style="font-size:17px;font-weight:900;padding:6px 14px;border-radius:8px;background:var(--green-main);color:#fff;display:inline-block;">${title}</div>
      ${extraLines.map(l=>`<div style="font-size:12px;color:#555;margin-top:4px;">${l}</div>`).join('')}
    </div>`;
  return `<div dir="${L.dir}" style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px double var(--green-main);padding-bottom:14px;margin-bottom:16px;">
    ${L.dir==='rtl' ? infoBlock+coBlock : coBlock+infoBlock}
  </div>`;
}

function getBonFooter() {
  const L = getTicketLabels();
  const co = companyInfo;
  const sigH = signatureData
    ? `<img src="${signatureData}" style="max-width:110px;max-height:45px;">`
    : `<div style="height:40px;border-bottom:1px solid #666;margin-top:26px;width:100px;"></div>`;
  return `
  <div dir="${L.dir}" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:22px;padding-top:12px;border-top:1px dashed #ccc;">
    <div style="text-align:center;"><div style="font-size:11px;color:#888;margin-bottom:4px;">${L.clientSig}</div>${sigH}</div>
    <div style="text-align:center;"><div style="font-size:11px;color:#888;margin-bottom:4px;">${L.managerSig}</div>${sigH}</div>
  </div>
  <div dir="${L.dir}" style="text-align:center;margin-top:12px;font-size:11px;color:#bbb;border-top:1px dashed #eee;padding-top:8px;">
    ${co.name||'ASIL CAISSE'}${co.addr?' — '+co.addr:''}${co.tel?' — '+co.tel:''}
  </div>
  <div style="text-align:center;font-size:13px;font-weight:700;color:var(--green-main);margin-top:6px;">${L.thanks}</div>`;
}

function doPrint(html, copies=1) {
  const el = document.getElementById('print-ticket');
  const fontFamily = getTicketLabels().fontFamily;
  const boxHtml = `<div style="font-family:${fontFamily};width:148mm;min-height:180mm;margin:0 auto;padding:8mm 10mm;box-sizing:border-box;">${html}</div>`;
  const separator = `<div style="border-top:2px dashed #aaa;margin:10mm 0;text-align:center;font-size:10px;color:#888;letter-spacing:2px;">— COPIE —</div>`;
  el.innerHTML = copies >= 2 ? boxHtml + separator + boxHtml : boxHtml;
  el.style.display='block';
  setTimeout(()=>{ window.print(); el.style.display='none'; }, 150);
}

function removeLogo() {
  logoData=null;
  localStorage.removeItem('asil_logo');
  scheduleIndexedSave();
  const lp=document.getElementById('logo-preview');if(lp){lp.style.display='none';}
  const ph=document.getElementById('logo-upload-ph');if(ph)ph.style.display='flex';
  refreshTicketPreview();
  showAlert('Logo supprimé','success');
}

function refreshTicketPreview() {
  const co=companyInfo;
  const L=getTicketLabels();
  const tpName=document.getElementById('tp-company-name');
  const tpAddr=document.getElementById('tp-company-addr');
  const tpTel=document.getElementById('tp-company-tel');
  const tpLogo=document.getElementById('tp-logo-img');
  const tpLang=document.getElementById('tp-lang-label');
  const tpTotal=document.getElementById('tp-total-line');
  const tpFoot=document.getElementById('tp-footer');
  const box=document.getElementById('ticket-preview-live');
  if(tpName)tpName.textContent=co.name||'ASIL CAISSE';
  if(tpAddr)tpAddr.textContent=co.addr||'';
  if(tpTel)tpTel.textContent=co.tel||'';
  if(tpLogo){if(logoData){tpLogo.src=logoData;tpLogo.style.display='block';}else{tpLogo.style.display='none';}}
  if(tpLang){const icon=currentLang==='ar'?'🇸🇦':currentLang==='en'?'🇬🇧':'🇫🇷';tpLang.textContent=icon+' '+L.saleTicket+' — '+L.num+'0001';}
  if(tpTotal)tpTotal.querySelector('span:first-child').textContent=L.totalPay;
  if(tpFoot)tpFoot.textContent=L.thanks;
  if(box)box.dir=L.dir;
  // Highlight active lang button
  ['fr','en','ar'].forEach(l=>{const b=document.getElementById('lang-btn-'+l);if(b){b.classList.toggle('active-lang',l===currentLang);}});
}

// ─── CALCULATRICE ──────────────────────────────────────────
let calcExpr = '';
function calcBtn(val) {
  const disp = document.getElementById('calc-display');
  if(!disp) return;
  if(val === 'C') { calcExpr = ''; disp.textContent = '0'; return; }
  if(val === '⌫') { calcExpr = calcExpr.slice(0,-1); disp.textContent = calcExpr || '0'; return; }
  if(val === '=') {
    try {
      let expr = calcExpr.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-');
      // Handle %
      expr = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
      const result = Function('"use strict";return ('+expr+')')();
      const rounded = parseFloat(result.toFixed(10));
      disp.textContent = rounded;
      calcExpr = String(rounded);
    } catch(e) { disp.textContent = '❌ Erreur'; calcExpr = ''; }
    return;
  }
  calcExpr += val;
  disp.textContent = calcExpr;
}

// ─── INIT ──────────────────────────────────────────────────
function init() {
  buildCategories();
  renderPosGrid();
  loadClientOptions();
  loadProductOptions();
  checkStockAlerts();
  updateClock();
  setInterval(updateClock,1000);
  // Apply saved settings
  const savedColor=localStorage.getItem('asil_color');
  if(savedColor) applyCustomColor(savedColor);
  if(localStorage.getItem('asil_theme')==='soir') document.body.classList.add('dark-mode');
  if(companyInfo.name&&companyInfo.name!=='ASIL CAISSE'){const sb=document.querySelector('.sidebar-brand');if(sb)sb.innerHTML=companyInfo.name+'<span>Point de Vente Pro</span>';}
  // Show dashboard on start
  document.querySelectorAll('.tab-pane').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const dt=document.getElementById('tab-dashboard');if(dt)dt.classList.add('active');
  const dn=document.querySelector('[data-tab=dashboard]');if(dn)dn.classList.add('active');
  const ti=document.getElementById('topbar-title');if(ti)ti.innerHTML=getTopbarTitleHtml('dashboard');
  const db=document.getElementById('btn-back-dashboard');if(db)db.style.display='none';
  renderDashboard();
}

// ═══════════════════════════════════════════════════════════
// ─── FACTURATION MODULE ────────────────────────────────────
// ═══════════════════════════════════════════════════════════

function initFactureForm() {
  const d = document.getElementById('fact-date');
  if (d && !d.value) d.value = new Date().toISOString().split('T')[0];
  document.getElementById('fact-num').value = 'FACT-' + String(factureCounter).padStart(4, '0');
  const cdl = document.getElementById('fact-client-dl');
  if (cdl) cdl.innerHTML = clients.map(c => `<option value="${c.name}">`).join('');
  const pdl = document.getElementById('fact-prod-dl');
  if (pdl) pdl.innerHTML = products.map(p => `<option value="${p.name} (${p.code})">`).join('');
  renderFactureLines();
}

function addFactureLine() {
  const nameVal = document.getElementById('fact-prod-name').value.trim();
  const qty = parseFloat(document.getElementById('fact-prod-qty').value) || 0;
  const price = parseFloat(document.getElementById('fact-prod-price').value) || 0;
  if (!nameVal || qty <= 0) { showAlert('Produit et quantité requis', 'danger'); return; }
  const p = products.find(x => x.name.toLowerCase() === nameVal.toLowerCase() || x.code.toLowerCase() === nameVal.split('(').pop().replace(')', '').trim().toLowerCase() || nameVal.toLowerCase().includes(x.name.toLowerCase()));
  const code = p ? p.code : '';
  const unitPrice = price > 0 ? price : (p ? p.price : 0);
  if (unitPrice <= 0) { showAlert('Prix unitaire requis', 'danger'); return; }
  factureLines.push({ code, name: p ? p.name : nameVal, qty, unitPrice, total: qty * unitPrice });
  document.getElementById('fact-prod-name').value = '';
  document.getElementById('fact-prod-qty').value = '1';
  document.getElementById('fact-prod-price').value = '';
  renderFactureLines();
}

function removeFactureLine(i) {
  factureLines.splice(i, 1);
  renderFactureLines();
}

function renderFactureLines() {
  const el = document.getElementById('fact-lines-list');
  if (!el) return;
  if (!factureLines.length) { el.innerHTML = '<div style="text-align:center;color:var(--gray-600);font-size:12px;padding:12px;">Aucun produit ajouté</div>'; updateFactureTotal(); return; }
  el.innerHTML = factureLines.map((l, i) => `
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:8px;align-items:center;padding:8px;background:var(--gray-50);border-radius:8px;margin-bottom:4px;font-size:12px;">
      <span style="font-weight:700;">${l.name}</span>
      <span style="text-align:center;">${l.qty}</span>
      <span style="text-align:right;">${l.unitPrice.toFixed(2)} DH</span>
      <span style="text-align:right;font-weight:900;">${l.total.toFixed(2)} DH</span>
      <button onclick="removeFactureLine(${i})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:4px 8px;cursor:pointer;font-weight:700;">✕</button>
    </div>`).join('');
  updateFactureTotal();
}

function updateFactureTotal() {
  const t = factureLines.reduce((s, l) => s + l.total, 0);
  const el = document.getElementById('fact-total');
  if (el) el.textContent = t.toFixed(2) + ' DH';
}

function cancelFacture() {
  factureLines = [];
  renderFactureLines();
  document.getElementById('fact-client').value = '';
  document.getElementById('fact-phone').value = '';
  document.getElementById('fact-address').value = '';
  document.getElementById('fact-note').value = '';
  initFactureForm();
}

function saveFacture() {
  if (!factureLines.length) { showAlert('Ajoutez au moins un produit', 'danger'); return; }
  const num = factureCounter++;
  const ref = 'FACT-' + String(num).padStart(4, '0');
  const clientName = document.getElementById('fact-client').value.trim() || 'Client';
  const phone = document.getElementById('fact-phone').value.trim();
  const address = document.getElementById('fact-address').value.trim();
  const dateVal = document.getElementById('fact-date').value || new Date().toISOString().split('T')[0];
  const paymode = document.getElementById('fact-paymode').value;
  const note = document.getElementById('fact-note').value.trim();
  const total = factureLines.reduce((s, l) => s + l.total, 0);
  const facture = { num, ref, client: clientName, phone, address, date: dateVal, paymode, note, lines: [...factureLines], total };
  factures.push(facture);
  save();
  playBeep();
  showAlert('✅ Facture ' + ref + ' enregistrée', 'success');
  if (confirm('Imprimer la facture ?')) printFactureByNum(num);
  factureLines = [];
  cancelFacture();
  renderFactureTable();
}

function renderFactureTable() {
  const tb = document.getElementById('fact-table');
  if (!tb) return;
  const q = (document.getElementById('fact-search')?.value || '').toLowerCase();
  const filtered = factures.filter(f => !q || f.ref.toLowerCase().includes(q) || f.client.toLowerCase().includes(q));
  if (!filtered.length) { tb.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--gray-600);">Aucune facture</td></tr>'; return; }
  tb.innerHTML = [...filtered].reverse().map(f => {
    const pm = f.paymode === 'especes' ? '💵 Espèces' : f.paymode === 'credit' ? '💳 Crédit' : f.paymode === 'virement' ? '📲 Virement' : '🏦 Chèque';
    return `<tr>
      <td style="font-weight:700;">${f.ref}</td>
      <td>${f.date}</td>
      <td>${f.client}</td>
      <td style="font-weight:800;">${f.total.toFixed(2)} DH</td>
      <td>${pm}</td>
      <td><button onclick="printFactureByNum(${f.num})" style="border:none;background:var(--green-glow);color:var(--green-dark);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🖨️</button>
           <button onclick="deleteFacture(${f.num})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🗑️</button></td>
    </tr>`;
  }).join('');
}

function filterFactures() { renderFactureTable(); }

function deleteFacture(num) {
  if (!confirm('Supprimer cette facture ?')) return;
  factures = factures.filter(f => f.num !== num);
  save(); renderFactureTable();
  showAlert('Facture supprimée', 'success');
}

function printFacturePreview() {
  if (!factureLines.length) { showAlert('Aucun produit', 'danger'); return; }
  _doPrintFacture({ num: 0, ref: 'APERÇU', client: document.getElementById('fact-client').value || '—', phone: document.getElementById('fact-phone').value || '', address: document.getElementById('fact-address').value || '', date: document.getElementById('fact-date').value || new Date().toISOString().split('T')[0], paymode: document.getElementById('fact-paymode').value, note: document.getElementById('fact-note').value, lines: factureLines, total: factureLines.reduce((s, l) => s + l.total, 0) });
}

function printFactureByNum(num) {
  const f = factures.find(x => x.num === num);
  if (f) _doPrintFacture(f);
}

function _doPrintFacture(f) {
  const L = getTicketLabels();
  const rows = f.lines.map(l => `<tr>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.name}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:center;">${l.qty}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;">${l.unitPrice.toFixed(2)} DH</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;">${l.total.toFixed(2)} DH</td>
  </tr>`).join('');
  const pm = f.paymode === 'especes' ? L.cash : f.paymode === 'credit' ? L.credit : f.paymode === 'virement' ? '📲 Virement' : '🏦 Chèque';
  const clientBlock = `<div style="background:#f7f9f7;border-radius:6px;padding:8px 12px;margin-bottom:10px;font-size:12px;">
    <strong style="color:#0f4c2a;">👤 ${f.client}</strong>
    ${f.phone ? ' &nbsp;📞 ' + f.phone : ''}
    ${f.address ? '<br>📍 ' + f.address : ''}
  </div>`;
  const header = getBonHeader(`${L.invoice} ${L.num}${f.ref}`, f.num, [
    `${L.date}: ${f.date}`,
    `${L.payMode}: ${pm}`,
    f.note ? `📝 ${f.note}` : '',
  ].filter(Boolean));
  const table = `${clientBlock}<table dir="${L.dir}" style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;">
    <thead><tr style="background:var(--green-main);color:#fff;">
      <th style="padding:8px 10px;text-align:left;">${L.product}</th>
      <th style="padding:8px 10px;text-align:center;">${L.qty}</th>
      <th style="padding:8px 10px;text-align:right;">${L.unitPrice}</th>
      <th style="padding:8px 10px;text-align:right;">${L.total}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  const totalRow = `<div dir="${L.dir}" style="display:flex;justify-content:flex-end;margin-top:12px;">
    <div style="width:220px;background:var(--green-glow);border-radius:8px;padding:12px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:var(--green-dark);">
        <span>${L.totalPay}</span><span>${f.total.toFixed(2)} DH</span>
      </div>
    </div>
  </div>`;
  doPrint(header + table + totalRow + getBonFooter());
}

// ═══════════════════════════════════════════════════════════
// ─── BON DE COMMANDE MODULE ───────────────────────────────
// ═══════════════════════════════════════════════════════════

function initBonCommandeForm() {
  const d = document.getElementById('bc-date');
  if (d && !d.value) d.value = new Date().toISOString().split('T')[0];
  document.getElementById('bc-num').value = 'BC-' + String(bonCommandeCounter).padStart(4, '0');
  const sdl = document.getElementById('bc-supplier-dl');
  if (sdl) sdl.innerHTML = suppliers.map(s => `<option value="${s.name}">`).join('');
  const pdl = document.getElementById('bc-prod-dl');
  if (pdl) pdl.innerHTML = products.map(p => `<option value="${p.name} (${p.code})">`).join('');
  renderBonCommandeLines();
}

function addBonCommandeLine() {
  const nameVal = document.getElementById('bc-prod-name').value.trim();
  const qty = parseFloat(document.getElementById('bc-prod-qty').value) || 0;
  const price = parseFloat(document.getElementById('bc-prod-price').value) || 0;
  if (!nameVal || qty <= 0) { showAlert('Produit et quantité requis', 'danger'); return; }
  const p = products.find(x => x.name.toLowerCase() === nameVal.toLowerCase() || nameVal.toLowerCase().includes(x.name.toLowerCase()));
  const code = p ? p.code : '';
  const unitPrice = price > 0 ? price : (p ? p.price : 0);
  if (unitPrice <= 0) { showAlert('Prix unitaire requis', 'danger'); return; }
  bonCommandeLines.push({ code, name: p ? p.name : nameVal, qty, unitPrice, total: qty * unitPrice });
  document.getElementById('bc-prod-name').value = '';
  document.getElementById('bc-prod-qty').value = '1';
  document.getElementById('bc-prod-price').value = '';
  renderBonCommandeLines();
}

function removeBonCommandeLine(i) {
  bonCommandeLines.splice(i, 1);
  renderBonCommandeLines();
}

function renderBonCommandeLines() {
  const el = document.getElementById('bc-lines-list');
  if (!el) return;
  if (!bonCommandeLines.length) { el.innerHTML = '<div style="text-align:center;color:var(--gray-600);font-size:12px;padding:12px;">Aucun produit ajouté</div>'; updateBonCommandeTotal(); return; }
  el.innerHTML = bonCommandeLines.map((l, i) => `
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:8px;align-items:center;padding:8px;background:var(--gray-50);border-radius:8px;margin-bottom:4px;font-size:12px;">
      <span style="font-weight:700;">${l.name}</span>
      <span style="text-align:center;">${l.qty}</span>
      <span style="text-align:right;">${l.unitPrice.toFixed(2)} DH</span>
      <span style="text-align:right;font-weight:900;">${l.total.toFixed(2)} DH</span>
      <button onclick="removeBonCommandeLine(${i})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:4px 8px;cursor:pointer;font-weight:700;">✕</button>
    </div>`).join('');
  updateBonCommandeTotal();
}

function updateBonCommandeTotal() {
  const t = bonCommandeLines.reduce((s, l) => s + l.total, 0);
  const el = document.getElementById('bc-total');
  if (el) el.textContent = t.toFixed(2) + ' DH';
}

function cancelBonCommande() {
  bonCommandeLines = [];
  renderBonCommandeLines();
  document.getElementById('bc-supplier').value = '';
  document.getElementById('bc-delivery-date').value = '';
  document.getElementById('bc-conditions').value = '';
  initBonCommandeForm();
}

function saveBonCommande() {
  if (!bonCommandeLines.length) { showAlert('Ajoutez au moins un produit', 'danger'); return; }
  const num = bonCommandeCounter++;
  const ref = 'BC-' + String(num).padStart(4, '0');
  const supplier = document.getElementById('bc-supplier').value.trim() || '—';
  const dateVal = document.getElementById('bc-date').value || new Date().toISOString().split('T')[0];
  const deliveryDate = document.getElementById('bc-delivery-date').value || '';
  const conditions = document.getElementById('bc-conditions').value.trim();
  const total = bonCommandeLines.reduce((s, l) => s + l.total, 0);
  const bc = { num, ref, supplier, date: dateVal, deliveryDate, conditions, lines: [...bonCommandeLines], total, status: 'en_attente' };
  bonCommandes.push(bc);
  save();
  playBeep();
  showAlert('✅ Bon de commande ' + ref + ' enregistré', 'success');
  if (confirm('Imprimer le bon de commande ?')) printBonCommandeByNum(num);
  bonCommandeLines = [];
  cancelBonCommande();
  renderBonCommandeTable();
}

function renderBonCommandeTable() {
  const tb = document.getElementById('bc-table');
  if (!tb) return;
  const q = (document.getElementById('bc-search')?.value || '').toLowerCase();
  const filtered = bonCommandes.filter(b => !q || b.ref.toLowerCase().includes(q) || b.supplier.toLowerCase().includes(q));
  if (!filtered.length) { tb.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--gray-600);">Aucun bon de commande</td></tr>'; return; }
  tb.innerHTML = [...filtered].reverse().map(b => {
    const statusLabel = b.status === 'livree' ? '<span style="color:#2e7d32;font-weight:700;">✅ Livrée</span>' : b.status === 'annulee' ? '<span style="color:var(--red);font-weight:700;">❌ Annulée</span>' : '<span style="color:#e65100;font-weight:700;">⏳ En attente</span>';
    return `<tr>
      <td style="font-weight:700;">${b.ref}</td>
      <td>${b.date}</td>
      <td>${b.supplier}</td>
      <td style="font-weight:800;">${b.total.toFixed(2)} DH</td>
      <td>${statusLabel}</td>
      <td>
        <button onclick="printBonCommandeByNum(${b.num})" style="border:none;background:var(--green-glow);color:var(--green-dark);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🖨️</button>
        ${b.status === 'en_attente' ? `<button onclick="markBcDelivered(${b.num})" style="border:none;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">✅</button>` : ''}
        <button onclick="deleteBonCommande(${b.num})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🗑️</button>
      </td>
    </tr>`;
  }).join('');
}

function filterBonCommandes() { renderBonCommandeTable(); }

function markBcDelivered(num) {
  const bc = bonCommandes.find(b => b.num === num);
  if (bc) { bc.status = 'livree'; save(); renderBonCommandeTable(); showAlert('Commande marquée comme livrée', 'success'); }
}

function deleteBonCommande(num) {
  if (!confirm('Supprimer ce bon de commande ?')) return;
  bonCommandes = bonCommandes.filter(b => b.num !== num);
  save(); renderBonCommandeTable();
  showAlert('Bon de commande supprimé', 'success');
}

function printBonCommandePreview() {
  if (!bonCommandeLines.length) { showAlert('Aucun produit', 'danger'); return; }
  _doPrintBonCommande({ num: 0, ref: 'APERÇU', supplier: document.getElementById('bc-supplier').value || '—', date: document.getElementById('bc-date').value || new Date().toISOString().split('T')[0], deliveryDate: document.getElementById('bc-delivery-date').value || '', conditions: document.getElementById('bc-conditions').value, lines: bonCommandeLines, total: bonCommandeLines.reduce((s, l) => s + l.total, 0), status: 'en_attente' });
}

function printBonCommandeByNum(num) {
  const b = bonCommandes.find(x => x.num === num);
  if (b) _doPrintBonCommande(b);
}

function _doPrintBonCommande(b) {
  const L = getTicketLabels();
  const rows = b.lines.map(l => `<tr>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.name}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:center;">${l.qty}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;">${l.unitPrice.toFixed(2)} DH</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;">${l.total.toFixed(2)} DH</td>
  </tr>`).join('');
  const bcTitle = currentLang === 'ar' ? 'أمر الشراء' : currentLang === 'en' ? 'PURCHASE ORDER' : 'BON DE COMMANDE';
  const header = getBonHeader(`${bcTitle} ${L.num}${b.ref}`, b.num, [
    `${L.date}: ${b.date}`,
    `${L.supplier}: ${b.supplier}`,
    b.deliveryDate ? `📅 Livraison prévue: ${b.deliveryDate}` : '',
  ].filter(Boolean));
  const table = `<table dir="${L.dir}" style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;">
    <thead><tr style="background:#1565c0;color:#fff;">
      <th style="padding:8px 10px;text-align:left;">${L.product}</th>
      <th style="padding:8px 10px;text-align:center;">${L.qty}</th>
      <th style="padding:8px 10px;text-align:right;">${L.unitPrice}</th>
      <th style="padding:8px 10px;text-align:right;">${L.total}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  const condBlock = b.conditions ? `<div style="margin-top:12px;padding:10px;background:#f5f5f5;border-radius:8px;font-size:12px;"><strong>📝 Conditions:</strong> ${b.conditions}</div>` : '';
  const totalRow = `<div dir="${L.dir}" style="display:flex;justify-content:flex-end;margin-top:12px;">
    <div style="width:220px;background:#e3f2fd;border-radius:8px;padding:12px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:#1565c0;">
        <span>${L.totalPay}</span><span>${b.total.toFixed(2)} DH</span>
      </div>
    </div>
  </div>`;
  doPrint(header + table + condBlock + totalRow + getBonFooter());
}

// ═══════════════════════════════════════════════════════════
// ─── BON DE LIVRAISON MODULE ──────────────────────────────
// ═══════════════════════════════════════════════════════════

function initBonLivraisonForm() {
  const d = document.getElementById('bl-date');
  if (d && !d.value) d.value = new Date().toISOString().split('T')[0];
  document.getElementById('bl-num').value = 'BL-' + String(bonLivraisonCounter).padStart(4, '0');
  const cdl = document.getElementById('bl-client-dl');
  if (cdl) cdl.innerHTML = clients.map(c => `<option value="${c.name}">`).join('');
  const pdl = document.getElementById('bl-prod-dl');
  if (pdl) pdl.innerHTML = products.map(p => `<option value="${p.name} (${p.code})">`).join('');
  const bcdl = document.getElementById('bl-bc-dl');
  if (bcdl) bcdl.innerHTML = bonCommandes.map(b => `<option value="${b.ref}">`).join('');
  renderBonLivraisonLines();
}

function addBonLivraisonLine() {
  const nameVal = document.getElementById('bl-prod-name').value.trim();
  const qty = parseFloat(document.getElementById('bl-prod-qty').value) || 0;
  const price = parseFloat(document.getElementById('bl-prod-price').value) || 0;
  if (!nameVal || qty <= 0) { showAlert('Produit et quantité requis', 'danger'); return; }
  const p = products.find(x => x.name.toLowerCase() === nameVal.toLowerCase() || nameVal.toLowerCase().includes(x.name.toLowerCase()));
  const code = p ? p.code : '';
  const unitPrice = price > 0 ? price : (p ? p.price : 0);
  if (unitPrice <= 0) { showAlert('Prix unitaire requis', 'danger'); return; }
  bonLivraisonLines.push({ code, name: p ? p.name : nameVal, qty, unitPrice, total: qty * unitPrice });
  document.getElementById('bl-prod-name').value = '';
  document.getElementById('bl-prod-qty').value = '1';
  document.getElementById('bl-prod-price').value = '';
  renderBonLivraisonLines();
}

function removeBonLivraisonLine(i) {
  bonLivraisonLines.splice(i, 1);
  renderBonLivraisonLines();
}

function renderBonLivraisonLines() {
  const el = document.getElementById('bl-lines-list');
  if (!el) return;
  if (!bonLivraisonLines.length) { el.innerHTML = '<div style="text-align:center;color:var(--gray-600);font-size:12px;padding:12px;">Aucun produit ajouté</div>'; updateBonLivraisonTotal(); return; }
  el.innerHTML = bonLivraisonLines.map((l, i) => `
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:8px;align-items:center;padding:8px;background:var(--gray-50);border-radius:8px;margin-bottom:4px;font-size:12px;">
      <span style="font-weight:700;">${l.name}</span>
      <span style="text-align:center;">${l.qty}</span>
      <span style="text-align:right;">${l.unitPrice.toFixed(2)} DH</span>
      <span style="text-align:right;font-weight:900;">${l.total.toFixed(2)} DH</span>
      <button onclick="removeBonLivraisonLine(${i})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:4px 8px;cursor:pointer;font-weight:700;">✕</button>
    </div>`).join('');
  updateBonLivraisonTotal();
}

function updateBonLivraisonTotal() {
  const t = bonLivraisonLines.reduce((s, l) => s + l.total, 0);
  const el = document.getElementById('bl-total');
  if (el) el.textContent = t.toFixed(2) + ' DH';
}

function cancelBonLivraison() {
  bonLivraisonLines = [];
  renderBonLivraisonLines();
  document.getElementById('bl-client').value = '';
  document.getElementById('bl-address').value = '';
  document.getElementById('bl-bc-ref').value = '';
  document.getElementById('bl-transporteur').value = '';
  document.getElementById('bl-observations').value = '';
  initBonLivraisonForm();
}

function saveBonLivraison() {
  if (!bonLivraisonLines.length) { showAlert('Ajoutez au moins un produit', 'danger'); return; }
  const num = bonLivraisonCounter++;
  const ref = 'BL-' + String(num).padStart(4, '0');
  const clientName = document.getElementById('bl-client').value.trim() || 'Client';
  const address = document.getElementById('bl-address').value.trim();
  const dateVal = document.getElementById('bl-date').value || new Date().toISOString().split('T')[0];
  const bcRef = document.getElementById('bl-bc-ref').value.trim();
  const transporteur = document.getElementById('bl-transporteur').value.trim();
  const observations = document.getElementById('bl-observations').value.trim();
  const total = bonLivraisonLines.reduce((s, l) => s + l.total, 0);
  const bl = { num, ref, client: clientName, address, date: dateVal, bcRef, transporteur, observations, lines: [...bonLivraisonLines], total };
  bonLivraisons.push(bl);
  save();
  playBeep();
  showAlert('✅ Bon de livraison ' + ref + ' enregistré', 'success');
  if (confirm('Imprimer le bon de livraison ?')) printBonLivraisonByNum(num);
  bonLivraisonLines = [];
  cancelBonLivraison();
  renderBonLivraisonTable();
}

function renderBonLivraisonTable() {
  const tb = document.getElementById('bl-table');
  if (!tb) return;
  const q = (document.getElementById('bl-search')?.value || '').toLowerCase();
  const filtered = bonLivraisons.filter(b => !q || b.ref.toLowerCase().includes(q) || b.client.toLowerCase().includes(q));
  if (!filtered.length) { tb.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--gray-600);">Aucun bon de livraison</td></tr>'; return; }
  tb.innerHTML = [...filtered].reverse().map(b => `<tr>
    <td style="font-weight:700;">${b.ref}</td>
    <td>${b.date}</td>
    <td>${b.client}</td>
    <td style="font-weight:800;">${b.total.toFixed(2)} DH</td>
    <td>${b.bcRef || '—'}</td>
    <td>
      <button onclick="printBonLivraisonByNum(${b.num})" style="border:none;background:var(--green-glow);color:var(--green-dark);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🖨️</button>
      <button onclick="deleteBonLivraison(${b.num})" style="border:none;background:#ffebee;color:var(--red);border-radius:6px;padding:5px 10px;cursor:pointer;font-weight:700;font-size:11px;">🗑️</button>
    </td>
  </tr>`).join('');
}

function filterBonLivraisons() { renderBonLivraisonTable(); }

function deleteBonLivraison(num) {
  if (!confirm('Supprimer ce bon de livraison ?')) return;
  bonLivraisons = bonLivraisons.filter(b => b.num !== num);
  save(); renderBonLivraisonTable();
  showAlert('Bon de livraison supprimé', 'success');
}

function printBonLivraisonPreview() {
  if (!bonLivraisonLines.length) { showAlert('Aucun produit', 'danger'); return; }
  _doPrintBonLivraison({ num: 0, ref: 'APERÇU', client: document.getElementById('bl-client').value || '—', address: document.getElementById('bl-address').value || '', date: document.getElementById('bl-date').value || new Date().toISOString().split('T')[0], bcRef: document.getElementById('bl-bc-ref').value || '', transporteur: document.getElementById('bl-transporteur').value || '', observations: document.getElementById('bl-observations').value, lines: bonLivraisonLines, total: bonLivraisonLines.reduce((s, l) => s + l.total, 0) });
}

function printBonLivraisonByNum(num) {
  const b = bonLivraisons.find(x => x.num === num);
  if (b) _doPrintBonLivraison(b);
}

function _doPrintBonLivraison(b) {
  const L = getTicketLabels();
  const rows = b.lines.map(l => `<tr>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.name}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:center;">${l.qty}</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;">${l.unitPrice.toFixed(2)} DH</td>
    <td style="padding:7px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;">${l.total.toFixed(2)} DH</td>
  </tr>`).join('');
  const blTitle = L.bonLivraison;
  const clientBlock = `<div style="background:#f7f9f7;border-radius:6px;padding:8px 12px;margin-bottom:10px;font-size:12px;">
    <strong style="color:#0f4c2a;">👤 ${b.client}</strong>
    ${b.address ? '<br>📍 ' + b.address : ''}
    ${b.transporteur ? '<br>🚚 Transporteur: ' + b.transporteur : ''}
  </div>`;
  const header = getBonHeader(`${blTitle} ${L.num}${b.ref}`, b.num, [
    `${L.date}: ${b.date}`,
    b.bcRef ? `📎 Réf. BC: ${b.bcRef}` : '',
  ].filter(Boolean));
  const table = `${clientBlock}<table dir="${L.dir}" style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px;">
    <thead><tr style="background:#e65100;color:#fff;">
      <th style="padding:8px 10px;text-align:left;">${L.product}</th>
      <th style="padding:8px 10px;text-align:center;">${L.qty}</th>
      <th style="padding:8px 10px;text-align:right;">${L.unitPrice}</th>
      <th style="padding:8px 10px;text-align:right;">${L.total}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  const obsBlock = b.observations ? `<div style="margin-top:12px;padding:10px;background:#f5f5f5;border-radius:8px;font-size:12px;"><strong>📝 Observations:</strong> ${b.observations}</div>` : '';
  const totalRow = `<div dir="${L.dir}" style="display:flex;justify-content:flex-end;margin-top:12px;">
    <div style="width:220px;background:#fff3e0;border-radius:8px;padding:12px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:#e65100;">
        <span>${L.totalPay}</span><span>${b.total.toFixed(2)} DH</span>
      </div>
    </div>
  </div>`;
  doPrint(header + table + obsBlock + totalRow + getBonFooter());
}

window.onload = async () => {
  await hydrateDataStorage();
  setLang(currentLang);
  init();
  checkAuth();
  applyLang();
  scheduleIndexedSave();
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => save(), 30000);
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m=>{
    m.addEventListener('click',e=>{ if(e.target===m) m.classList.remove('active'); });
  });
};

window.addEventListener('beforeunload', () => {
  try { localStorage.setItem('asil_last_touch', new Date().toISOString()); } catch(_) {}
  const snapshot = getStateSnapshot();
  if(navigator.sendBeacon) {
    try {
      const blob = new Blob([JSON.stringify(snapshot)], { type: 'application/json' });
      navigator.sendBeacon(FILE_SYNC_ENDPOINT, blob);
    } catch(_) {}
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    scheduleIndexedSave(false);
  }
});