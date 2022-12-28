"use strict";
// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
exports.__esModule = true;
// structs need to be in order
/* eslint-disable sort-keys */
var definitions = {
    types: [
        {
            // on all versions
            minmax: [0, undefined],
            types: {
                Address: 'MultiAddress',
                LookupSource: 'MultiAddress',
                TokenId: 'u64',
                InstanceId: 'u64',
                ExchangeId: 'u32',
                TokenSymbol: {
                    _enum: {
                        W3G: 0,
                        DOT: 1,
                        ACA: 2,
                        AUSD: 3
                    }
                },
                CurrencyId: {
                    _enum: {
                        Token: 'TokenSymbol'
                    }
                },
                CurrencyIdOf: 'CurrencyId',
                CollectionId: 'u64',
                AssetId: '64'
            }
        }
    ]
};
exports["default"] = definitions;
